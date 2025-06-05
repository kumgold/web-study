import "./App.css";
import ContentsRanking from "./components/common/ContentsRanking";
import AdMembership from "./components/enroll/AdMembership";
import EnrollNetflix from "./components/enroll/EnrollNetflix";
import EnrollReason from "./components/enroll/EnrollReason";
import FrequentlyQuestions from "./components/enroll/FrequentlyQuestions";

function App() {
    return (
        <main>
            <section>
                <EnrollNetflix />
            </section>
            <section>
                <AdMembership />
                <ContentsRanking />
                <EnrollReason />
                <FrequentlyQuestions />
            </section>
        </main>
    );
}

export default App;
