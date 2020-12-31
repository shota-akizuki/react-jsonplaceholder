import React, { useState } from "react";
import jsonplaceholder from "./api/jsonplaceholder";
import Resources from "./components/Resources";
import Button from "./components/Button";

export const App = () => {
  //const [変数名, 関数名] = useState(初期値)
  // jsonplaceholderからもらうデータが配列なので、初期値は空の配列にしておく
  const [resources, setResources] = useState([]);

  //axiosを用いてhttps通信を行う関数を作成
  //非同期通信なのでasync/awaitを使用
  //データを取ってくる場面ではtry/catch構文を使う
  const getPosts = async () => {
    try {
      //https通信でデータを取得するにはget(引数にURL)メソッドを使う
      //postsにgetしたデータが入る
      const posts = await jsonplaceholder.get("/posts");
      //postsをresourcesに代入したい
      //正常に動いていればresourcesに100個データが入る
      setResources(posts.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getAlbums = async () => {
    try {
      const albums = await jsonplaceholder.get("/albums");
      setResources(albums.data);
    } catch (err) {
      console.log(err);
    }
  };
  //resourcesはprops名、{resources}はuseStateの変数名
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <Button onClick={getPosts} color={"primary"} text={"posts"} />
      <Button onClick={getAlbums} color={"red"} text={"albums"} />
      <Resources resources={resources} />
    </div>
  );
};

export default App;
