import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import { ArrowRight, BookOpen, GraduationCap, Languages, Mail, Plane, Sparkles } from "lucide-react";

export default function HomeSections() {
  return (
    <main className="home-main">
      <section id="gioi-thieu" className="about-section section-shell">
        <div className="section-intro">
          <span className="section-index">01 · GIỚI THIỆU</span>
          <h2>Boarding pass<br/><em>của một sinh viên Đức ngữ.</em></h2>
        </div>
        <div className="boarding-pass">
          <div className="pass-main">
            <div className="pass-route"><span>HAN</span><div><Plane size={18}/><i/></div><span>DE</span></div>
            <div className="pass-grid">
              <div><small>HÀNH KHÁCH</small><strong>Đào Thị Vân Anh</strong></div>
              <div><small>MÃ SINH VIÊN</small><strong>25041867</strong></div>
              <div><small>NGÀNH / KHOA</small><strong>NN&amp;VH Đức</strong></div>
              <div><small>HÀNH TRÌNH</small><strong>Công nghệ số &amp; AI</strong></div>
            </div>
            <p>Em chọn hình ảnh chuyến bay như một ẩn dụ cho quá trình học: chuẩn bị nền tảng, tìm đúng phương hướng, thử nghiệm công cụ mới và luôn giữ trách nhiệm với mỗi quyết định.</p>
          </div>
          <div className="pass-stub">
            <span>VA · 1867</span>
            <div className="barcode" aria-hidden="true"/>
            <small>BOARDING GROUP</small><strong>DEUTSCH</strong>
            <div className="flag-stripes"><i/><i/><i/></div>
          </div>
        </div>
        <div className="about-notes">
          <article><Languages/><h3>Ngôn ngữ</h3><p>Học tiếng Đức đi cùng khả năng quan sát, diễn đạt và kết nối giữa các nền văn hóa.</p></article>
          <article><BookOpen/><h3>Học thuật</h3><p>Tìm nguồn, đánh giá thông tin và trình bày tài liệu là nền tảng của quá trình học đại học.</p></article>
          <article><Sparkles/><h3>Công nghệ</h3><p>AI và công cụ số được sử dụng như trợ lý, không phải phương án thay thế tư duy cá nhân.</p></article>
        </div>
      </section>

      <section id="du-an" className="projects-section section-shell">
        <div className="projects-head">
          <div><span className="section-index">02 · DỰ ÁN</span><h2>Sáu chặng bay<br/><em>đã hoàn thành.</em></h2></div>
          <p>Mỗi bài tập được dựng thành một trang riêng, giữ đúng nội dung, bảng biểu và ảnh minh chứng từ tài liệu gốc.</p>
        </div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>)}</div>
      </section>

      <section id="tong-ket" className="reflection-section">
        <div className="reflection-inner section-shell">
          <div className="reflection-mark"><GraduationCap size={36}/><span>REFLEXION</span></div>
          <blockquote>“Công nghệ chỉ thực sự có ý nghĩa khi giúp mình học chủ động hơn, diễn đạt rõ ràng hơn và chịu trách nhiệm hơn với điều mình tạo ra.”</blockquote>
          <div className="reflection-copy">
            <p>Qua sáu bài tập, em không chỉ luyện thao tác máy tính mà còn học cách tìm kiếm thông tin, phối hợp nhóm, viết prompt, sáng tạo với AI và giữ liêm chính học thuật.</p>
            <p>Hành trình này tạo nền tảng để em tiếp tục kết hợp năng lực ngôn ngữ Đức với kỹ năng số trong học tập và công việc sau này.</p>
          </div>
        </div>
      </section>

      <section id="lien-he" className="contact-section section-shell">
        <div className="contact-route"><span>VIỆT NAM</span><i/><Plane/><i/><span>DEUTSCHLAND</span></div>
        <h2>Bis zum nächsten<br/><em>Abenteuer.</em></h2>
        <a href="mailto:daovananhh2007@gmail.com"><Mail size={20}/> daovananhh2007@gmail.com <ArrowRight size={20}/></a>
        <footer><span>© 2026 Đào Thị Vân Anh</span><span>Portfolio · Nhập môn Công nghệ số &amp; AI</span></footer>
      </section>
    </main>
  );
}
