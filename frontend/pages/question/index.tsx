import CreateQuestions from "../../components/CreateQuestions";
import { useRouter } from "next/router";

const Question = () => {
  const router = useRouter();
  router.replace("/");

  return <CreateQuestions />;
};

export default Question;
