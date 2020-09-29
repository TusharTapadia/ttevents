const post0 = {
  id: 1,
  eventId: 1,
  round: 1,
  start: "12:00",
  end: "02:00",
  location: "AB 1",
  eventName: "Cypher"
}

const post1 = {
  id: 2,
  eventId: 2,
  round: 1,
  start: "01:00",
  end: "03:00",
  location: "AB 2",
  eventName: "Decrypt"
}

const post2 = {
  id: 3,
  eventId: 3,
  round: 1,
  start: "04:00",
  end: "06:00",
  location: "AB 3",
  eventName: "Techno"
}

const post3 = {
  id: 4,
  eventId: 4,
  round: 1,
  start: "01:00",
  end: "02:00",
  location: "AB 4",
  eventName: "BulHunt"
}

const post4 = {
  id: 5,
  eventId: 5,
  round: 1,
  start: "12:00",
  end: "02:00",
  location: "AB 5",
  eventName: "Honululu"
}
module.exports = {
  posts: function(req, res){

    res.send([post0,post1,post2,post3,post4])
  }
}
