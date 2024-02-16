import { questions } from "./Questions";
import Question from "./components/Question";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./App.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSlideCHange = (swiper: any) => {
    setCurrentPage(swiper.realIndex + 1);
  };
  return (
    <main>
      <h1 className="title">Swipe for more questions!</h1>
      <div className="main-container">
        <Swiper
          spaceBetween={1}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={handleSlideCHange}
          navigation
        >
          {questions.map((q) => (
            <SwiperSlide key={q.id} className="swiper-slide">
   
              <Question question={q.question} answer={q.answer} />
    
            </SwiperSlide>
          ))}
          <div className="pagination-info">
            Question: {currentPage} of {questions.length}
          </div>
        </Swiper>
      </div>
    </main>
  );
}

export default App;
