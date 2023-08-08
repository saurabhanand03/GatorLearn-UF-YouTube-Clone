import React from "react";
import Channels from "./Channels";
import QuestionsBox from "./QuestionsBox";

export default function Questions() {
    return (
        <div className="w-full p-2 relative">
            <Channels />
            <QuestionsBox />
        </div>
    );
}
