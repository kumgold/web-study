import "./FrequentlyQuestions.css";
import add from "../../assets/add.svg";

const questions = [
    {
        title: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
        description: "ss",
    },
    {
        title: "넷플릭스란 무엇인가요?",
        description: "ss",
    },
    {
        title: "넷플릭스 요금은 얼마인가요?",
        description: "ss",
    },
    {
        title: "어디에서 시청할 수 있나요?",
        description: "ss",
    },
    {
        title: "멤버십을 해지하려면 어떻게 하나요?",
        description: "ss",
    },
    {
        title: "아이들이 넷플릭스를 봐도 좋을까요?",
        description: "ss",
    },
];

const FrequentlyQuestions = () => {
    const list = questions.map((q) => (
        <li>
            <span>{q.title}</span>
            <img src={add} alt="" />
        </li>
    ));
    return (
        <section className="question-container">
            <h2>자주 묻는 질문</h2>
            <ul>{list}</ul>
        </section>
    );
};

export default FrequentlyQuestions;
