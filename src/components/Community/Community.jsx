import './Commnunity.css';
import './CommnunityDetail.css';

import { Route, Routes } from "react-router-dom";

import Notice from "./Notice";
import SearchedNotices from "./SearchedNotices";
import NoticeDetail from "./NoticeDetail";
import Inquiry from "./Inquiry";
import InquiryDetail from "./InquiryDetail";
import Review from "./Review";
import ReviewDetail from "./ReviewDetail";
import Faq from "./Faq";
import FaqDetail from "./FaqDetail";

export default function Community() {
    return (
        <Routes>
            <Route path="/notice" element={<Notice />} />
            <Route path="/notice/searchNotices" element={<SearchedNotices />} />
            <Route path="/noticeDetail" element={<NoticeDetail />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/inquiryDetail" element={<InquiryDetail />} />
            <Route path="/review" element={<Review />} />
            <Route path="/reviewDetail" element={<ReviewDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/faqDetail" element={<FaqDetail />} />
        </Routes >
    )
}