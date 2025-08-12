export type Testimonial = {
  id: string;
  author: string;
  subtitle?: string; // location, company, or context
  body: string; // full text
};

export const testimonials: Testimonial[] = [
  {
    id: "david-victoria-james",
    author: "David & Victoria James",
    subtitle: "Create & Construct Scottsdale",
    body:
      "We have had the great pleasure of working with JoEllen of O.M. Design Group for the last two years. JoEllen is a not only a highly professional designer, but also a really lovely person which immediately puts clients at ease. She has an impressive way of immediately being able to visualise the bigger picture, whatever the size and scope of the project. This is reflected in the stunning portfolio of houses she has designed across the valley.\n\nJoEllen’s sense of style is exceptional and unique, yet she always remains grounded in the feasibility and the costs of a project.\nWhether your design goals are large or small, JoEllen will work closely with you, and within your budget to create a beautifully personalised space for you to live in, and enjoy, day after day.\n\nWhat contractors and clients particularly enjoy about working with JoEllen is that, by utilizing her extensive network of sub contractors and resources, she truly provides the full package of what is required to complete a project to a very high standard. This includes working drawings and renderings of the finished project down to the last details. As such, there are no grey areas and both client and contractor fully understand the scope of works and have a clear visual of the finished product beforehand.\n\nOur clients have had nothing but great things to say about their experience of working with O.M. Design Group and have each and every one of them been delighted with the outcome.\n\nWe highly recommend engaging the services of O.M. Design Group and we take great pride in having been part of bringing some of her projects to fruition.",
  },
  {
    id: "brook-urban",
    author: "Brook Urban",
    subtitle: "Greenwich, CT & Scottsdale, AZ",
    body:
      "I have had the privilege of working with JoEllen on two projects. One in AZ and the other in CT.\n\nMy Desert Mountain home needed some updating and JoEllen was respectful of the items I already owned and also understood that there was a budget in place for changes. She worked with me replacing outdated furniture, upholstery needs and accessories, pushing me a bit out of my comfort zone with great results. We totally renovated a bathroom and she had a great vision. Her contacts in the trade saved me money and provided quality work. Some of the decisions needed to be made after I had returned to CT for the summer and JoEllen was always available by email or phone. Friends that have visited since the updates have raved about the changes. My husband is also a fan!\n\nWhen we bought a condo in CT I needed help. It was a total renovation. We went down to studs and rebuilt. I asked JoEllen to take on the long-distance project. I made a great decision! We established a price and scope of work. JoEllen worked with every contractor and sub….she chose (with me) flooring, paint color, wallpaper, kitchen cabinets, counters, created a lighting plan, all plumbing fixtures, hardware, molding, counter tops, carpet, furniture etc. She was in direct contact with the General Contractor and kitchen designer, sometimes on a daily basic. She visited twice and each time was a working visit and when I was exhausted, she worked in the evenings to finalize the plans and items to purchase. The third time she visited was when the project was complete and she saw her vision in real time.\n\nIn addition to her expertise, JoEllen is fun, respectful and a true professional. I still have her helping me with things in AZ and some extras in CT. I would hire her and/or recommend her again in a minute!",
  },
  {
    id: "nicki-tom-lewis",
    author: "Nicki and Tom Lewis",
    subtitle: "Scottsdale",
    body:
      "The time had come to “do” our master bedroom. We had lots of pictures and lots of ideas, but weren’t really sure how to make it all happen. Lucky for us, we found JoEllen. JoEllen was able to take all of our thoughts and wishes and translate them into the bedroom we always wanted. At the same time we also decided that it was time to refresh our living room. Our living room had gone through a couple of transformaitons, but it just wasn’t what we really wanted. Once again, JoEllen was able to take our wishes and make them a reality. JoEllen is able to identify with her clients and to deliver their dreams. In additon, she is lots of fun to work with and to just “hang out with”. We are looking forward to finishing and refreshing several other rooms in our house. It will definitely be with JoEllen by our side!",
  },
  {
    id: "steve-victoria-hamlin",
    author: "Steve and Victoria Hamlin",
    subtitle: "Scottsdale",
    body:
      "JoEllen Sessa is not only a consummate professional but is also delightful. We hired JoEllen in 2013 to help us with a total demolition and design remodel of our Master Bedroom and Bath. She was always on top of the project and managed to work easily with all of the contractors. She came with great ideas, has impeccable taste and has an excellent eye for color and design.\nWe have continued to work with JoEllen on other design projects throughout our home with pleasing results. Furthermore, we have had no hesitation to recommend her to other Desert Mountain residents. She is the complete design package!",
  },
  {
    id: "cherie-stafford",
    author: "Cherie Stafford",
    subtitle: "Phoenix",
    body:
      "JoEllen is simply fantastic. She understood my vision for a complete interior remodel of my home and helped me make it a reality. She did the research, sent me photos, found the materials, worked within my budget, and followed through until completion. JoEllen has the scope and reach to assist you, no matter your taste and style. JoEllen is the consummate professional. If she says she’s going to do something or be somewhere, you can count on her. I consider myself lucky to have worked with this amazing designer. Awesome customer service and awesome results!",
  },
  {
    id: "amanda-culhane",
    author: "Amanda Culhane",
    subtitle: "Sydney, Australia",
    body:
      "I worked with JoEllen Sessa, to re-design and redecorate my four bedroom home in Scottsdale. This project involved a major architectural, and structural redesign, as well as complete redecoration. JoEllen was both highly professional and fun to work with. She offered me a wide array of design/decorating choices, in terms of both style and price points. What I loved best is she brought great ideas and creativity to the project, but always listened to us and respected our priorities. I have worked with designers on projects at our homes in London and Sydney, and my most positive experience has been with O.M. Design Group.",
  },
  {
    id: "private-client-2023",
    author: "Private Client",
    subtitle: "Scottsdale, 2023 home renovation",
    body:
      "JoEllen Sessa is a top-notch designer. She is talented and stays current with decorating trends attending many building and design product conventions. She listens to her clients to create and enhance their visions by introducing innovative and creative ideas.  In 2023, JoEllen worked her magic during our home renovation which included extensive demolition and reconfiguration of interior spaces: kitchen, living room, dining room, bar, and master and guest baths. She melded both the contractor’s and our visions for the remodel. She clearly understood our design preferences. Her recommendations for lighting, flooring, plumbing, cabinetry, paint colors, etc., were spot on. A year later, we couldn’t be happier. JoEllen truly exceeded our expectations, and you can count on JoEllen to bring your project to an strikingly beautiful finish.",
  },
];

export function getInitials(name: string): string {
  const parts = name.split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function truncateText(text: string, maxChars = 260): string {
  if (text.length <= maxChars) return text;
  const slice = text.slice(0, maxChars);
  const lastSpace = slice.lastIndexOf(" ");
  return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trimEnd() + "…";
}


