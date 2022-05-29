import { db } from "../config/Database.js";
import { Assignments } from "../models/UserModel.js";

export const AddNewAssignment = async (req, res) => {
  try {
    const ret = await Assignments.create({
      title: req.body.title,
      description: req.body.description,
      music_genre: req.body.musicGenre,
      practice_time: req.body.practiceTime,
      days: req.body.days,
      days_practiced: req.body.daysPracticed,
    });
    res.json({ filedata: ret.dataValues });
  } catch (e) {
    console.log("from uploads", e);
  }
};

export const SelectAllAssignments = async (req, res) => {
  try {
    const myAssignments = await Assignments.findAll();
    res.json(myAssignments);
  } catch (e) {
    console.log("in SelectAllAssignments", e);
  }
};
