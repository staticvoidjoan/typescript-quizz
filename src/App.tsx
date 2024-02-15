import { questions } from "./Questions";
import Question from "./components/Question";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./App.css"
function App() {
  return (
    <main>
      <h1>Swipe for more questions!</h1>
      <div className="main-container">

      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
        >
        {questions.map((q) => (
          <SwiperSlide
          key={q.id}
          style={{ display: "flex", justifyContent: "center" }}
          >
            <Question question={q.question} answer={q.answer} />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </main>
  );
}

export default App;
