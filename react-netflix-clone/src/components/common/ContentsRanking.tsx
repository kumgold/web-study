import { ranking } from "../../data/ranking.ts";
import "./ContentsRanking.css";

const ContentsRanking = () => {
    const list = ranking.map((content) => (
        <li key={content.id}>
            <img src={content.thumbnail} alt={content.name} />
        </li>
    ));
    return (
        <section className="contents-ranking-container">
            <h2>지금 뜨는 콘텐츠</h2>
            <ul className="contents">{list}</ul>
        </section>
    );
};

export default ContentsRanking;
