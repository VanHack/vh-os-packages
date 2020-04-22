import React from "react";
import { storiesOf } from "@storybook/react";
import VHModalProfileReview from "./index";

const values = [
    { note: "<b>PHOTO</b>	>  Add a professional headshot. Use a photo that is at least 200x200 pixels.<b>NAME</b>	> Use your full name. If too long, you can use only the first and last names.<b>EMAIL</b>	> Use a professional email address.<b>GENERAL SECTION</b>	> Citizenship – add your main nationality.	> Current location – add the city you’re currently living in. <b>SKILLS SECTION</b>	> Add your role (for example, Backend Engineer, UX Designer, Project Manager) + total years of experience. 	&gt; <b>PRO TIP:</b> Count only the years working in an IT role – experience in an unrelated area (for example, mechanical engineering) is not relevant and should not be considered.<b>EXPERIENCE SECTION</b>	> List out all your relevant previous roles and describe the work you did there.	> Consider listing responsibilities that you can illustrate with achievements.	&gt; <b>PRO TIP:</b> In general, the best way to show great experience is to use up to 5 bullet points per company. Write up to 3 lines per bullet point. The ideal structure for a bullet point is to start with a powerful verb and list your main responsibilities and more detailed info about the project with the tech stack and finish telling the result/benefit of your project or activity. <b>EDUCATION SECTION</b>	> Choose your degree type.	> Add your major, the name of the educational institution, its location, and the period you studied there.	> Licenses and Certifications – add the name, the institution where you did the course, and date.	&gt; <b>PRO TIP:</b> Each employer searches for different things in your education and what they look for depends on the requirements for the job. Knowing your education level will make it easier for us to match you to your ideal job."},
    { note: "<b>PHOTO</b>	>  Add a professional headshot. Use a photo that is at least 200x200 pixels.<b>NAME</b>	> Use your full name. If too long, you can use only the first and last names.<b>EMAIL</b>	> Use a professional email address.<b>GENERAL SECTION</b>	> Citizenship – add your main nationality.	> Current location – add the city you’re currently living in. <b>SKILLS SECTION</b>	> Add your role (for example, Backend Engineer, UX Designer, Project Manager) + total years of experience. 	&gt; <b>PRO TIP:</b> Count only the years working in an IT role – experience in an unrelated area (for example, mechanical engineering) is not relevant and should not be considered.<b>EXPERIENCE SECTION</b>	> List out all your relevant previous roles and describe the work you did there.	> Consider listing responsibilities that you can illustrate with achievements.	&gt; <b>PRO TIP:</b> In general, the best way to show great experience is to use up to 5 bullet points per company. Write up to 3 lines per bullet point. The ideal structure for a bullet point is to start with a powerful verb and list your main responsibilities and more detailed info about the project with the tech stack and finish telling the result/benefit of your project or activity. <b>EDUCATION SECTION</b>	> Choose your degree type.	> Add your major, the name of the educational institution, its location, and the period you studied there.	> Licenses and Certifications – add the name, the institution where you did the course, and date.	&gt; <b>PRO TIP:</b> Each employer searches for different things in your education and what they look for depends on the requirements for the job. Knowing your education level will make it easier for us to match you to your ideal job."},

]


storiesOf("Components|Modal Profile Review", module)
    .add("Types", () => {
        return (
            <VHModalProfileReview
                openModal={true}
                notes={values}
                data="vanhack" />
        );
    });
