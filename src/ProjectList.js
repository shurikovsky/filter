export default function ProjectList({projects}) {
    projects.forEach(element => {
     return (
       <div class='photo'>{element}</div>
     )
    });
  }