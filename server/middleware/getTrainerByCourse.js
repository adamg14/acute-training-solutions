const mongoose = require("mongoose");
const Trainer = require("../models/Trainer");

async function getTrainerByCourse(course) {
    try {
        await mongoose.connect("mongodb+srv://adam:adam@cluster0.sc1aozc.mongodb.net/acute_training_solutions?retryWrites=true&w=majority&appName=Cluster0");

        const qualifiedTrainers = await Trainer.find({ qualifications: { $in: [course] } });
        return qualifiedTrainers;
    } catch (error) {
        return ["error", error];
    }
}


// example of a result
// // [
//   {
//     _id: new ObjectId('66119b9a570ce7e18eec8b59'),
//     trainerId: '88bb7f66-f8f9-44f3-8a49-060b13d3610e',
//     trainerEmail: 'adam12@email.com',
//     qualifications: [
//       'Basic Life Support',
//       'Care of Medicine Level 1',
//       'Effective Communication',
//       'Nutrition, Postive Eating & Early Years',
//       'Paediatric Manual Handling',
//       'Venepuncture Training',
//       'Syringe Driver Awareness',
//       'Positive Behaviour Management',
//       'Mental Health Awareness'
//     ],
//     trainerName: 'Adam Worede',
//     trainerPostcode: 'CF5 1QR',
//     trainerRegion: 'London',
//     passwordHash: '$2b$10$vCHUuLUYAV28wIeQj/Qum.KVMX0Vk85jn/WgK8MP8jWAgTX9/hIFK',
//     events: [],
//     __v: 0
//   }
// ]


module.exports = getTrainerByCourse;