var friendsArray = [
    {
        name: "Dominic Abogado",
        photo: "https://drive.google.com/file/d/1ma2AazYuxWjC07kFUI63w0mBe-f47mI_/view?usp=sharing",
        scores: [
            3,
            1,
            3,
            2,
            4,
            5,
            5,
            1,
            1,
            2
        ]
    },
    {
        name: "Sang Lee",
        photo: "https://drive.google.com/file/d/1K_9JSknXQZncVlQDkfFJW-AAuopGj6jk/view?usp=sharing",
        scores: [
            4,
            4,
            4,
            5,
            1,
            1,
            2,
            5,
            2,
            5
        ]
    },
    {
        name: "Rabeea Wajeeha",
        photo: "https://drive.google.com/file/d/15EhTpelG5szGljknJ0T9D5_doJI87SAm/view?usp=sharing",
        scores: [
            1,
            1,
            2,
            3,
            4,
            5,
            5,
            5,
            2,
            4
        ]
    },
    {
        name: "Hamad Alsulaiman",
        photo: "https://avatars1.githubusercontent.com/u/22552277?s=400&u=699da976f062b9e82e32d52a87796895314121e9&v=4",
        scores: [
            1,
            2,
            2,
            5,
            5,
            2,
            4,
            2,
            1,
            2
        ]
    },
]

var newFriend =     {
    name: "Kamau",
    photo: "https://avatars1.githubusercontent.com/u/22552277?s=400&u=699da976f062b9e82e32d52a87796895314121e9&v=4",
    scores: [
        3,
        2,
        4,
        2,
        1,
        1,
        3,
        5,
        2,
        1
    ]
}

test();
function test(){
for (var i=0;i<friendsArray.length;i++){
    totalDifference = 0;
    differenceArray = [];
    for(var j=0;j<friendsArray[i].scores.length;j++){
        totalDifference += Math.abs(parseInt(newFriend.scores[j])-parseInt(friendsArray[i].scores[j]));
        console.log(friendsArray[i].name + " | " + totalDifference)
    }


}

}
