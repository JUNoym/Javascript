//9/22
{
const tereScope = (scope) => {
  if (scope === 'iii') {
    var message = 'functionscope'
  };
  // constや  letで宣言してしまうとエラーが出る
  // varは関数スコープで関数の中であればどこからでも参照ができる
  // letで宣言した場合はブロックの中でのみ参照可能
  // 今回の場合であればletでmessageを定義した場合はconosole.logはif文の外になるのでエラーが出る
 console.log(message)
}

tereScope('iii')
}


{
 const tereScope = (scope) => {
  if (scope === "iii") {
    var functionScope = "関数の中であればどこからでも参照できる変数だよ";
  } else if (scope === "aaa") {
    let blockScope = "ブロックの中でしか参照できない変数だよ";
    console.log(blockScope);
  }
  console.log(functionScope);
  };

tereScope("aaa");
}

//定数のの違いについて

{
  //constは定数なので値を代入した後に再代入することはできないが
  // 配列にpushなどをすることは可能
  const mutableArray = [1,2,3];
  mutableArray.push(4,5,6,)
  console.log(mutableArray)  //[1, 2, 3, 4, 5, 6]
  
  //オブジェクトでも同じような挙動になる
  const mutableObject = {id: 'first', value: 'hello'};
  mutableObject['name'] = 'junya'
  console.log(mutableObject)  //{id: "first", value: "hello", name: "junya"}

}

{//アロー関数について
  function namedfunction(message) {
    console.log(message);
  }

  namedfunction("konnnitha");

  const arrowFunction = (message) => {
    console.log(message);
  };

  arrowFunction("これはアロー関数です");

  const onelineFunction = (message) => console.log(message + message);

  onelineFunction("１行でアロー関数がかける");
}

{//アロー関数を１行で書く時はどのように使うか
const users = {
  name: 'junya',
  name1: 'taro',
  name2: 'oyama',
}

const getUsername = name => { 
  return users[name]
};

const username = getUsername('name2')
console.log(username)
}


//9/24
{
  //mapについて
const array = [1,2,3,4];
const changedArray = array.map( x => x*10);
console.log(changedArray)
//[10, 20, 30, 40]

// 連想配列について
// 連想配列とは、自動的に割り当てられる数字をキーとして持つかわりに、自由に任意の文字列を割り振ることができる配列
// キーを任意に指定できることによって、そこに格納されている値が何のことであるかということがより簡単に連想できるようになっている
// また、配列の要素からある値を探し出して使いたいという場合でも、キーを指定しやすいという特徴がある
// JavaScriptでも配列を使うことができ、連想配列のオブジェクトもある。変数のリストをキーと値の配列よりも便利に使えるようになっている’

// Object.keys() メソッドは、指定されたオブジェクトが持つプロパティの 名前の配列を、通常のループで取得するのと同じ順序で返します。
// const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
expected output: Array ["a", "b", "c"]

const object = {
  'hoge': {text: 'hello'},
  'hoge1': {text: 'hi'},
  'hoge2': {text: 'good'}
};

const ObjectArray = Object.keys(object).map(key => {
  const value = object[key];
  value['idNumber'] = key;
  return value
});

console.log(ObjectArray)
}

// //Filterについて
// //条件に合う要素だけを抽出する　filter()

// //Filterについて
// //条件に合う要素だけを抽出する　filter()

const ObjectArray = [
  {id: 'hoge', text: "fuga"},
  {id: 'hoge1', text: "fuga1"},
  {id: 'hoge2', text: "fuga2"},
];

const result = ObjectArray.filter(object => {
  return object.id === 'hoge'
});

console.log(result)  
//0: Object
// id: "hoge"
// text: "fuga"
console.log(result[0].text) //fuga


//findindexの使い方　要素の何番目なのかを知ることができるメソッド　
//配列をイテレートする　条件がtureの要素が何番目なのかを返す
//使い所としては配列の中でどこかの要素に変更があった時に　その変更があったｉｎｄｅｘを持ってきて何らかの処理をする時に使う
const ObjectArray = [
  {id: 'hoge', text: "fuga"},
  {id: 'hoge1', text: "fuga1"},
  {id: 'hoge2', text: "fuga2"},
];

const index = ObjectArray.findIndex(object => {
  return object.id === 'hoge2';
});

console.log(index, ObjectArray[index]) 


// 同期処理の書き方

const synchronousFunc = () => {
  console.log('同期処理関数ないのログです')
  return '完了'
}

const message = '同期処理'

const result = synchronousFunc()
console.log(message + result)

// 非同期処理の書き方　new promise

const getGitUsername = () => {
  return new Promise((resolve, reject) => {
    const url = "https://api.github.com/users/JUNoym";
    //GITHUB　APIをFetchメソッドで実行
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log("これ非同期処理のメッセージです");
        return resolve(json.login);
      })
      .catch((error) => {
        console.error("これは非同期処理のメッセージです", error);
        return reject(null);
      });
  });
};

const message = "gitのユーザーIDは";
getGitUsername().then(username => {
  console.log(message + username)
})


//非同期処理　async/awaitの場合
const getGitUsername2 = async () => {
  const message2 = 'gitのuseridは';
  const url = "https://api.github.com/users/JUNoym"

  const json = await fetch(url)
      .then(res => {
        console.log('これは非同期処理が成功したときのメッセージです')
        return res.json()
      }).catch(error => {
        console.log('これは非同期処理が失敗したときメッセージです')
        return null

      });
  const username = json.login;
  console.log(message2 + username)
}

getGitUsername2();






































































































