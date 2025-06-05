FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
LABEL stage=build

RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_22.x | bash \
  && apt-get install -y nodejs \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /src

COPY Client/package.json Client/package-lock.json* Client/
COPY Server/Server.csproj Server/

WORKDIR /src/Client
RUN npm ci

WORKDIR /src
RUN dotnet restore "./Server/Server.csproj"

COPY . .

WORKDIR /src/Server
RUN dotnet publish \
  -c Release \
  -o /app/publish \
  /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
LABEL stage=final

WORKDIR /app

COPY --from=build /app/publish .

EXPOSE 80

ENTRYPOINT ["dotnet", "Server.dll"]
