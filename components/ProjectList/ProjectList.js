import Card from "../Card/Card";

export default async function ProjectList() {
  const response = await fetch("http://localhost:3001/repos", {
    cache: "no-cache",
  });
  const repos = await response.json();
  // throw new Error('Error')
  return (
    <>
      <div className="p-20">
        <ul>
          {repos.map((repos) => (
            <li key={repos.id} className="mb-4">
              <Card>
                <div className="flex justify-between">
                  <div>{repos.title}</div>
                  <div>{repos.description}</div>
                </div>

                <div>{repos.stargazers_count}</div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
