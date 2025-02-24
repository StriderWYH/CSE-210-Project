import { Request, Response } from "express";
import User from "../models/User";
import Content from "../models/Content";

export const recommendContent = async(req: Request, res: Response) => {
    const {username} = req.params;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            res.status(404).json({message: "Username does not exist."});
            return;
        }
        const userTags = user.tags;

        const contents = await Content.find();

        const scoredContent = contents.map((content) => {
            const matchingTags = content.tags.filter((tag) => userTags.some(userTag => userTag.tag === tag)).length;
            return { content, score: matchingTags };
        });

        scoredContent.sort((a, b) => b.score - a.score);

        const top10results = scoredContent.slice(0,10).map((item) => item.content);

        res.status(200).json({recommendations: top10results});
        return
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({message: "An error ocurred ", error});
        return;
    }
};

