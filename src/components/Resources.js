import React from "react";

//親からresourcesというpropsをもらってくる

export const Resources = ({ resources }) => {
  return (
    //map関数を使って配列のresourcesをひとつひとつ展開する
    //map関数を使うと膨大なデータを扱いやすくなる。具体的には、配列の個数分、同じ処理を繰り返してくれる
    //今回は100個のデータを扱うのでmap関数を使う。
    <React.Fragment>
      {resources.map((resource) => (
        //jsonのidをkeyとして指定
        //pタグの中にkeyで指定したデータのtitleを表示している
        <p key={resource.id}>{resource.title}</p>
      ))}
    </React.Fragment>
  );
};

export default Resources;

//jsonplaceholderのデータは以下のような感じで100個
// posts=[
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//   },]
