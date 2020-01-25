import { ProflieReducer } from "./ProfileReducer";
import { DialogsReducer } from "./DialogsReducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "How are you ? ", likesCount: 111 },
        { id: 2, message: "HEY !)", likesCount: 12 }
      ],
      newPost: ""
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Привет))" },
        { id: 2, message: "Привеn)" }
      ],
      dialogs: [
        {
          id: 1,
          name: "Dima",
          image:
            "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: 2,
          name: "Sveta",
          image:
            "https://cdn.vox-cdn.com/thumbor/sWVpOoJHOaceo3zN2sPzdNf-Nhc=/0x0:1024x769/1200x800/filters:focal(431x304:593x466)/cdn.vox-cdn.com/uploads/chorus_image/image/65309922/vsco5d069ef5e0929.0.jpg"
        },
        {
          id: 3,
          name: "Inna",
          image:
            "https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      ],
      newMessage: ""
    },
    siteBar: {
      users: [
        {
          id: 1,
          name: "Sveta",
          image:
            "https://cdn.vox-cdn.com/thumbor/sWVpOoJHOaceo3zN2sPzdNf-Nhc=/0x0:1024x769/1200x800/filters:focal(431x304:593x466)/cdn.vox-cdn.com/uploads/chorus_image/image/65309922/vsco5d069ef5e0929.0.jpg"
        },
        {
          id: 2,
          name: "Vika",
          image:
            "https://static.bershka.net/4/photos2/2019/V/0/1/p/1966/381/250/1966381250_1_1_3.jpg?t=1554885223409"
        },
        {
          id: 3,
          name: "Anya",
          image:
            "https://lp2.hm.com/hmgoepprod?set=source[/a9/35/a935b83f97917233cc29b63e1c5a237e1ee7d2e8.jpg],origin[dam],category[ladies_hoodiesswetshirts_sweatshirts],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]"
        }
      ]
    }
  },
  _callSubscriber() {
    console.log("Work State");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = ProflieReducer(this._state.profilePage, action);
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
};
