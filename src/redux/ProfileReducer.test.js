import {
  ProflieReducer,
  addPostActionCreator,
  deletePost
} from "./ProfileReducer";

let state = {
  posts: [
    { id: 1, message: "How are you ? ", likesCount: 111 },
    { id: 2, message: "HEY !)", likesCount: 12 }
  ]
};

it("New post should be added + ", () => {
  //1.Test date
  let action = addPostActionCreator("IT");
  //2.Action
  let newState = ProflieReducer({ state }, { action });
  //3.Expectation
  //    newState.posts.length === 5;
  expect(newState.posts.length).toBe(3); //тест добавилось ли наше значени и длина массива (3)
});
it("Message of new post should be added + correct ", () => {
  //1.Test date
  let action = addPostActionCreator("IT");
  //2.Action
  let newState = ProflieReducer({ state }, { action });
  //3.Expectation
  expect(newState.posts[2].message).tobe("IT"); //тест на добавился ли текст
});

//tdd logig
it("After deleting length of messages should be decrement", () => {
  //1.Test date
  let action = deletePost(1);
  //2.Action
  let newState = ProflieReducer({ state }, { action });
  //3.Expectation
  expect(newState.posts.length).toBe(1);
});

it("After deleting length  shouldn`t be decrement if  id is incorrect", () => {
  //1.Test date
  let action = deletePost(11111);
  //2.Action
  let newState = ProflieReducer({ state }, { action });
  //3.Expectation
  expect(newState.posts.length).toBe(2);
});
