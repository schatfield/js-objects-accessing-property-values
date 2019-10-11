const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

const beatleAlbum = beatles.albums[3]
const beatleMember = beatles.members[1].name
const beatleBday = beatles.members[1].birth
const startDate = beatles.history.formed
const endDate = beatles.history.disbanded

console.log(beatleAlbum)
console.log(beatleBday)
console.log(beatleMember)
console.log(startDate)
console.log(endDate)


console.log(`${beatleMember} was in the Beatles from ${startDate} to ${endDate}. He was born in ${beatleBday}. He contributed heavily to ${beatleAlbum}`)
