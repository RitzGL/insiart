const mongoose_connection = require("../config/connection");
const User = require("../models/User");
const Piece = require("../models/Piece");

const users = require("../seeders/users.json");
const pieces = require("../seeders/piece.json");

mongoose_connection.once("open", async () => {
  try {
    await User.deleteMany({});
    await Piece.deleteMany({});
    const piece_db = await Piece.create(pieces);
    users.forEach(async (userData) => {
      console.log("seed file user: ",userData);
      let user = {
        username: userData.username,
        faveArtist: userData.faveArtist,
        email: userData.email,
        password: userData.password,
        artCollection: [],
      };
      userData.artCollection.forEach((piece) => {
        console.log("piece from seed file: ",piece);
          piece_db.forEach((name)=>{
            if(name.name === piece){
                user.artCollection.push(name._id);
            }
          })
      })
      console.log("User to add to roster: ",user);
      await User.create(user);
      console.log("Seeds planted to db. All done!")
      process.exit(0);
    });
  } catch (error) {
    console.log(error);
  }
});
