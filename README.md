# sunny-hp

## Blazor

### winget

> `winget serch Microsoft.DotNet`  
> `Winget install (ID)`

[参考](https://devblogs.microsoft.com/dotnet/dotnet-now-on-windows-package-manager/
)

### Blazor

新しいBlazorアプリを作成
> `dotnet new blazorwasm -o my-app`

ビルドして実行
> `dotnet build (--configuration Release)`

発行
>`dotnet publish`
Github Pagesに発行
>`dotnet publish -o ../doc`
リリースとして発行
>`dotnet publish -c Release`

## React

### Create-react-app

プロジェクトを作成
> `npx create-react-app my-app`
> `cd my-app`  

サーバーを起動
> `npm start`

ビルド
> `npm run build`

### Material UI

マテリアルUIインストール
>`npm install @mui/material @mui/styled-engine-sc styled-components` 
