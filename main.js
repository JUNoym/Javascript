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


