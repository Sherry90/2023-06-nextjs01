import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project Page for a Specific Project for a Select Client</h1>
     </div>
  );
};

export default SelectedClientProjectPage;
