enum listTypes {
  REGULAR,
  LONGTEXT,
  DROPDOWN,
  RADIO,
  CHECKBOX,
}

const section0: Array<any> = [
  {
    key: 1,
    id: "firstName",
    notion_id: "First Name",
    label: "First Name",
    required: true,
  },
  {
    key: 2,
    id: "lastName",
    notion_id: "Last Name",
    label: "Last Name",
    required: true,
  },
  {
    key: 3,
    id: "preferredName",
    notion_id: "Preferred Name",
    label: "Preferred Name",
    required: false,
  },
  {
    key: 4,
    id: "gtEmail",
    notion_id: "GT Email",
    label: "GT Email",
    required: true,
  },
  {
    key: 5,
    id: "personalEmail",
    notion_id: "Personal Email",
    label: "Personal Email",
    required: false,
  },
  {
    key: 6,
    id: "preferredPronouns",
    notion_id: "Preferred Pronouns",
    label: "Preferred Pronouns",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: ["he/him/his", "she/her/hers", "they/them/theirs"],
  },
  {
    key: 7,
    id: "gender",
    notion_id: "Gender",
    label: "Gender",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: ["Male", "Female", "Prefer not to say"],
  },
  {
    key: 8,
    id: "ethnicity",
    notion_id: "Ethnicity",
    label: "Please indicate the race/ethnicity you identify yourself with",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: [
      "American Indian or Alaskan Native",
      "Asian",
      "Black or African American",
      "Hispanic or Latino",
      "Native American or other Pacific Islander",
      "White",
      "Prefer not to say",
    ],
  },
  {
    key: 9,
    id: "degree",
    notion_id: "Degree",
    label: "What is your degree program?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Undergraduate", "Masters", "PhD"],
  },
  {
    key: 10,
    id: "year",
    notion_id: "Year",
    label: "What year are you? (Please enter a number Eg. 3)",
    required: true,
    numeric: true,
  },
  {
    key: 11,
    id: "major",
    notion_id: "Major",
    label: "What major are you, or what is your research focus?",
    required: true,
  },
  {
    key: 12,
    id: "vip",
    notion_id: "VIP",
    label: "Are you part of the VIP for Bits of Good?",
    required: false,
  },
  {
    key: 13,
    id: "otherCommitments",
    notion_id: "Other Commitments",
    label: "What else are you involved in on- or off-campus?",
    required: true,
  },
  {
    key: 14,
    id: "credits",
    notion_id: "Credits",
    label: "How many credit Hours are you expecting to take this Fall?",
    required: true,
  },
  {
    key: 15,
    id: "hpw",
    notion_id: "hrs/wk",
    label: "How many hours/week can you commit to Bits of Good?",
    required: true,
    numeric: true,
  },
  {
    key: 16,
    id: "meetingAvailability",
    notion_id: "Meeting Availability",
    label:
      "Can you attend meetings on Tuesdays & Thursdays from 6:30 - 8:00 PM?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Yes", "No"],
  },
  {
    key: 17,
    id: "otherAvailabilityConcerns",
    label: "Note any other availability concerns here :)",
    required: false,
  },
  {
    key: 18,
    id: "previouslyApplied",
    notion_id: "Previously Applied",
    label:
      "Were you previously a member of Bits of Good prior to " +
      "this semester (Spring 2022 or earlier)? If so, what position " +
      "and which semester(s)?",
    required: false,
  },
];

const section1: Array<any> = [
  {
    key: 19,
    id: "gq1",
    label:
      "What motivates you to join Bits of Good? Feel free to share your past " +
      "experiences related to social good, volunteering, or nonprofits in " +
      "either high school or college. [800 chars]",
    required: true,
  },
  {
    key: 20,
    id: "gq2",
    label:
      "While you’re in Bits of Good you’ll be working on a team. " +
      "Talk about a time you had a disagreement while working on a team. " +
      "How did you come up with a resolution? [800 chars]",
    required: true,
  },
  {
    key: 21,
    id: "gq3",
    label:
      "If you had all the time and all the resources in the world, " +
      "what would you do? [800 chars]",
    required: true,
  },
];

const section2: Array<any> = [
  {
    key: 22,
    id: "psq1",
    label:
      "How much experience do you have in programming/web development? [500 chars]",
    required: true,
  },
  {
    key: 23,
    id: "psq2",
    label:
      "Describe an experience where you enjoyed working with your team. " +
      "What was the team dynamic like and what were you able to accomplish " +
      "as a result? [800 chars]",
    required: true,
  },
  {
    key: 24,
    id: "psq3",
    label:
      "Tell us about an involvement you are passionate about. " +
      "This can either be something you've done at GT or when you were in " +
      "high school. [800 chars]",
    required: true,
  },
  {
    key: 25,
    id: "psq4",
    label:
      "Describe one aspect of Bits of Good that you would add or " +
      "change if you were director. [500 chars]",
    required: true,
  },
];

const section3: Array<any> = [
  {
    key: 26,
    id: "oq1",
    label:
      "Link to your resume (we recommend uploading it to google driving and sharing)",
    required: false,
  },
  {
    key: 27,
    id: "oq2",
    label: "Link to your GitHub",
    required: false,
  },
  {
    key: 28,
    id: "oq3",
    label: "Link to your LinkedIn",
    required: false,
  },
  {
    key: 29,
    id: "oq4",
    label: "Link to your Personal site/Portfolio",
    required: false,
  },
  {
    key: 30,
    id: "oq5",
    label: "Any other links?",
    required: false,
  },
  {
    key: 31,
    id: "oq6",
    label:
      "Anything you'd like to add or note that wasn't conveyed in the application?",
    required: false,
  },
];

const sections: Array<Array<any>> = [section0, section1, section2, section3];
export { sections, listTypes };
