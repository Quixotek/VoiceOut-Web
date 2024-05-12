import { Thread } from "@/components/community/components/cards/CardDetail"

export const users = [
    {
        "id": "1001",
        "name": "Sophie",

    },
    {
        "id": "2001",
        "name": "Michael",
    },
    {
        "id": "3001",
        "name": "Ella",
    },
    {
        "id": "4001",
        "name": "David",
    },
    {
        "id": "5001",
        "name": "Sophia",
    }
]

export const threads : Thread[]= [
    {
        "userid": "1001",
        "id": "1",
        "title": "Remote Work Challenges",
        "description": "This forum discussion focuses on experiences ",
        "type": "Work",
        "views": 1987,
        "replies": 63,
        "reacts": 100,

    },
    {
        "userid": "2001",
        "id": "2",
        "title": "Diversity in Tech Industry",
        "description": "Exploring the importance of diversity and inclusion in the technology sector.",
        "type": "Tech",
        "views": 3124,
        "replies": 105,
        "reacts": 100,
    },
    {
        "userid": "3001",
        "id": "3",
        "title": "Burnout Prevention Strategies",
        "description": "This forum discussion focuses on experiences of gender discrimination in professional settings. Participants share anecdotes, offer support, and discuss strategies for addressing bias in hiring, promotions, and everyday interactions.",
        "type": "Health",
        "views": 1456,
        "replies": 38,
        "reacts": 100,

    },
    {
        "userid": " 4001",
        "id": "4",
        "title": "Innovation in Education",
        "description": "Exploring innovative approaches to teaching and learning in the digital age.",
        "type": "Education",
        "views": 2379,
        "replies": 92,
        "reacts": 100,

    },
    {
        "userid": "5001",
        "id": "5",
        "title": "Environmental Sustainability in Business",
        "description": "Discussing the role of businesses in promoting environmental sustainability and combating climate change.",
        "type": "Business",
        "views": 1897,
        "replies": 54,
        "reacts": 100,

    }
]

export const comments = [
    {
        "threadid": "1",
        "commentid": "1c",
        "name": "Michael",
        "comment": "This discussion aims to address the challenges ",
        "replies": [
            {
                "name": "Michael",
                "reply": "Remote work indeed presents unique challenges. ",
            },
            {
                "name": "Michael",
                "reply": "Remote work indeed presents unique challenges. Finding effective communication tools and establishing clear expectations are key to success in a remote work environment.",
            }
        ]
    },
    {
        "threadid": "1",
        "commentid": "2c",
        "name": "Ella",
        "comment": "I've found that setting boundaries between work and personal life can be particularly challenging when working from home. Does anyone have tips for maintaining a healthy work-life balance?",
        "replies": []
    },
    {
        "threadid": "1",
        "commentid": "3c",
        "name": "Ella",
        "comment": "I've found that setting boundaries between work and personal life can be particularly challenging when working from home. Does anyone have tips for maintaining a healthy work-life balance?",
        "replies": []
    },
    {
        "threadid": "1",
        "commentid": "4c",
        "name": "Ella",
        "comment": "I've found that setting boundaries between work and personal life can be particularly challenging when working from home. Does anyone have tips for maintaining a healthy work-life balance?",
        "replies": []
    },
    {
        "threadid": "1",
        "commentid": "5c",
        "name": "Ella",
        "comment": "I've found that setting boundaries between work and personal life can be particularly challenging when working from home. Does anyone have tips for maintaining a healthy work-life balance?",
        "replies": []
    },
    {
        "threadid": "1",
        "commentid": "6c",
        "name": "Ella",
        "comment": "I've found that setting boundaries between work and personal life can be particularly challenging when working from home. Does anyone have tips for maintaining a healthy work-life balance?",
        "replies": []
    },
    {
        "threadid": "1",
        "commentid": "7c",
        "name": "Ella",
        "comment": "I've found that setting boundaries between work and personal life can be particularly challenging when working from home. Does anyone have tips for maintaining a healthy work-life balance?",
        "replies": []
    },
    {
        "threadid": "2",
        "commentid": "1c",
        "name": "Michael",
        "comment": "This discussion highlights the significance of diversity in tech, including its positive impact on innovation, problem-solving, and company culture.",
        "replies": [
            {
                "name": "Sophia",
                "reply": "Diversity is not only a moral imperative but also a strategic advantage. It's crucial for tech companies to actively promote inclusion and diversity in their hiring and workplace practices.",
            }
        ]
    },
    {
        "threadid": "2",
        "commentid": "2c",
        "name": "David",
        "comment": "As a person of color working in tech, I've often faced challenges related to representation and inclusion. It's essential for companies to create environments where everyone feels valued and respected.",
        "replies": []
    },
    {
        "threadid": "3",
        "commentid": "1c",
        "name": "Ella",
        "comment": "This discussion focuses on practical ways to prevent burnout, such as setting boundaries, practicing self-care, and seeking support from colleagues and supervisors.",
        "replies": [
            {
                "name": "Sophie",
                "reply": "Burnout is a serious issue, especially in fast-paced industries. Prioritizing self-care and maintaining a healthy work-life balance are essential for long-term well-being.",
            }
        ]
    },
    {
        "threadid": "4",
        "commentid": "1c",
        "name": "David",
        "comment": "This discussion aims to explore innovative teaching methods, educational technologies, and ways to adapt to the changing needs of students in a digital age.",
        "replies": [
            {
                "name": "Ella",
                "reply": "Technology has transformed the way we teach and learn. From online courses to interactive educational apps, there are countless opportunities to enhance the learning experience for students of all ages.",
            }
        ]
    },
]