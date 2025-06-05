import "./App.css";
import Address from "./components/common/Address";
import ContentsRanking from "./components/common/ContentsRanking";
import MailInput from "./components/common/MailInput";
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
                <MailInput />
            </section>
            <footer>
                <Address />
            </footer>
        </main>
    );
}

export default App;
