export type TeamMember = {
    id: number;
    name: string;
    role: string;
    image: string;
    description: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "John Wick",
        role: "CEO FutureSphere",
        image: "/our-team-1.jpg",
        description:
            "During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn’t exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT prep apps on the market.",
    },

    {
        id: 2,
        name: "Sophia Carter",
        role: "UI/UX Designer",
        image: "/our-team-2.jpg",
        description:
            "Sophia specializes in creating intuitive and visually engaging interfaces. She has contributed to multiple award-winning digital products and focuses heavily on user-centered design systems.",
    },

    {
        id: 3,
        name: "Michael Reeves",
        role: "Frontend Engineer",
        image: "/our-team-3.jpg",
        description:
            "Michael develops scalable and performant frontend architectures using React and TypeScript. He is passionate about smooth animations, accessibility, and component-driven development.",
    },

    {
        id: 4,
        name: "Emily Stone",
        role: "Marketing Strategist",
        image: "/our-team-4.jpg",
        description:
            "Emily leads digital growth initiatives and branding campaigns. Her expertise in audience engagement has helped multiple startups significantly increase their online presence.",
    },

    {
        id: 5,
        name: "Daniel Brooks",
        role: "Product Manager",
        image: "/our-team-5.jpg",
        description:
            "Daniel coordinates cross-functional teams and product roadmaps. He focuses on delivering customer-driven solutions while maintaining efficient development workflows.",
    },

    {
        id: 6,
        name: "Olivia Bennett",
        role: "Content Creator",
        image: "/our-team-6.jpg",
        description:
            "Olivia creates educational and promotional content across multiple platforms. She combines storytelling with analytics to improve audience retention and engagement.",
    },

    {
        id: 7,
        name: "Ethan Walker",
        role: "Backend Developer",
        image: "/our-team-7.jpg",
        description:
            "Ethan designs reliable backend systems and APIs with a focus on scalability and security. He enjoys solving complex infrastructure and performance challenges.",
    },
]