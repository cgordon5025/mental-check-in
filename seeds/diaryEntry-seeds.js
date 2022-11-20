const { DiaryEntry } = require('../models')
const diaryEntryData = [
    {
        title: "today was a good day",
        description: "I got ice cream",
        user_id: 1,
        diary_id: 1
    },
    {
        title: "today was not as good",
        description: "We lost the soccer game and its my fault",
        user_id: 1,
        diary_id: 1
    },
    {
        title: "Im happy",
        user_id: 1,
        diary_id: 1
    },
    {
        title: "Mom and dad are fighting",
        description: "I don't know what to do",
        user_id: 2,
        diary_id: 2
    },
    {
        title: "It's fun at grandma and grandpas",
        description: "Its quiet here",
        user_id: 2,
        diary_id: 2
    },
    {
        title: "I am having a hard time paying attention ",
        description: "I don't know what to do",
        user_id: 3,
        diary_id: 3
    },
    {
        title: "Teacher was mad today",
        description: "They didn't like that I kept fidgeting at my desk",
        user_id: 3,
        diary_id: 3
    },
]

const seedDiaryEntry = () => DiaryEntry.bulkCreate(diaryEntryData)

module.exports = seedDiaryEntry