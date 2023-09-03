import React from "react";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Akshay saini",
      text: "loewn ison hcgss ajbhg erty jkdn gjd",
      replies: [
        {
          name: "Akshay saini",
          text: "loewn ison hcgss ajbhg erty jkdn gjd",
          replies: [
            {
              name: "Akshay saini",
              text: "loewn ison hcgss ajbhg erty jkdn gjd",
              replies: [
                {
                  name: "Akshay saini",
                  text: "loewn ison hcgss ajbhg erty jkdn gjd",
                  replies: [
                    {
                      name: "Akshay saini",
                      text: "loewn ison hcgss ajbhg erty jkdn gjd",
                      replies: [
                        {
                          name: "Akshay saini",
                          text: "loewn ison hcgss ajbhg erty jkdn gjd",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Akshay saini",
          text: "loewn ison hcgss ajbhg erty jkdn gjd",
          replies: [
            {
              name: "Akshay saini",
              text: "loewn ison hcgss ajbhg erty jkdn gjd",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay saini",
      text: "loewn ison hcgss ajbhg erty jkdn gjd",
      replies: [
        {
          name: "Akshay saini",
          text: "loewn ison hcgss ajbhg erty jkdn gjd",
          replies: [
            {
              name: "Akshay saini",
              text: "loewn ison hcgss ajbhg erty jkdn gjd",
              replies: [
                {
                  name: "Akshay saini",
                  text: "loewn ison hcgss ajbhg erty jkdn gjd",
                  replies: [
                    {
                      name: "Akshay saini",
                      text: "loewn ison hcgss ajbhg erty jkdn gjd",
                      replies: [
                        {
                          name: "Akshay saini",
                          text: "loewn ison hcgss ajbhg erty jkdn gjd",
                          replies: [
                            {
                              name: "Akshay saini",
                              text: "loewn ison hcgss ajbhg erty jkdn gjd",
                              replies: [
                                {
                                  name: "Akshay saini",
                                  text: "loewn ison hcgss ajbhg erty jkdn gjd",
                                  replies: [
                                    {
                                      name: "Akshay saini",
                                      text: "loewn ison hcgss ajbhg erty jkdn gjd",
                                      replies: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay saini",
      text: "loewn ison hcgss ajbhg erty jkdn gjd",
      replies: [
        {
          name: "Akshay saini",
          text: "loewn ison hcgss ajbhg erty jkdn gjd",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay saini",
      text: "loewn ison hcgss ajbhg erty jkdn gjd",
      replies: [
        {
          name: "Akshay saini",
          text: "loewn ison hcgss ajbhg erty jkdn gjd",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay saini",
      text: "loewn ison hcgss ajbhg erty jkdn gjd",
      replies: [
        {
          name: "Akshay saini",
          text: "loewn ison hcgss ajbhg erty jkdn gjd",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay saini",
      text: "loewn ison hcgss ajbhg erty jkdn gjd",
      replies: [
        {
          name: "Akshay saini",
          text: "loewn ison hcgss ajbhg erty jkdn gjd",
          replies: [],
        },
      ],
    },
    {
      name: "Akshay saini",
      text: "loewn ison hcgss ajbhg erty jkdn gjd",
      replies: [
        {
          name: "Akshay saini",
          text: "loewn ison hcgss ajbhg erty jkdn gjd",
          replies: [],
        },
      ],
    },
  ];
  return (
    <div className="m-4 p-2">
      <h1 className="text-lg font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
