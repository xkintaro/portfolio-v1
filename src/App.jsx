import "./App.css";
import AboutImage from '/about.jpg'
import React, { useState, useEffect, useRef } from 'react';
import { Button1, Button2, Button3, Button4 } from './components/button';
import { FolderCode, SquareUser, Sparkles, MoreVertical, Palette } from 'lucide-react';
import { Eye, Trash2, ArrowDownToLine, Tags, KeyRound, ArrowRight, Github, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

import Theme from './components/theme'
import Modal from './components/modal'
import { useModal } from "./contexts/ModalContext";

function App() {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const { activeModal, openModal, closeModal, modalTask } = useModal();

  const handleOpenModal = (project) => {
    openModal("project", project);
  };

  const selectedProject = modalTask;

  const menuItems = [
    <Button2 key="about" className="flex items-center gap-2" onClick={() => scrollToSection(aboutRef)}>
      <SquareUser size={18} />Hakkımda
    </Button2>,
    <Button2 key="skills" className="flex items-center gap-2" onClick={() => scrollToSection(skillsRef)}>
      <Sparkles size={18} />Teknolojiler
    </Button2>,
    <Button2 key="projects" className="flex items-center gap-2" onClick={() => scrollToSection(projectsRef)}>
      <FolderCode size={18} />Projelerim
    </Button2>,
    <Button3
      className='w-12 h-12 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] border border-[var(--border)] rounded-full flex items-center justify-center hover:scale-105 transition-transform'
      onClick={() => openModal("theme")}
      title="Select Theme"
    >
      <Palette size={20} />
    </Button3>
  ];


  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1024);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const visibleItemsCount = isSmallScreen ? 2 : 4;
  const shouldShowMore = menuItems.length > visibleItemsCount;

  const basePath = "";

  const projectsData = [
    {
      title: "Özgeçmişim(CV) için yaptığım web sayfam",
      image: basePath + "/thumb/cv.webp",
      demo: "https://xkintaro.github.io/cv/",
      description: "Özgeçmişim",
      date: "10 Eylül 2025",
      tags: ["React"]
    },
    {
      title: "Gelişmiş Dosya Yöneticisi",
      image: basePath + "/thumb/file.webp",
      video: basePath + "/video/manager.mp4",
      url: "https://github.com/xkintaro/file-manager",
      demo: "",
      description: "Bu aracı aslında sadece kendim kullanmak için yapmıştım. dosyalarıma etiket veya anahtar kelime ekledikten sonra, dosyaya ihtiyacım olduğunda bu anahtar kelimeler ve etiketlere kolayca ulaşabiliyordum. ayrıca yüklenen tüm dosyalar aynı dizinde toplandığı için yedekleme işlemlerini de daha kolay yapıyorum.",
      date: "10 Eylül 2025",
      tags: ["React", "Node.js", "mongoDB"]
    },
    {
      title: "Ovakids Çocuk Giyim",
      image: basePath + "/thumb/ovakids.webp",
      video: basePath + "/video/ovakids.mp4",
      url: "https://github.com/xkintaro/ovakids",
      demo: "https://xkintaro.github.io/ovakids/",
      description: "Bu projeyi komşum için yapmıştım. demosu mevcut",
      date: "10 Eylül 2025",
      tags: ["React"]
    },
    {
      title: "Çok amaçlı Python aracı",
      image: basePath + "/thumb/tools.webp",
      video: basePath + "/video/py-tools.mp4",
      url: "https://github.com/xkintaro/py-tools",
      demo: "",
      description: "Toplu olarak, Dosya dönüştürme, sıkıştırma, adlandırma ve ek olarak çeşitli platformlardan video indirme aracı",
      date: "10 Eylül 2025",
      tags: ["Python"]
    },
    {
      title: "Magagame oyun websitesi",
      image: basePath + "/thumb/magagame.webp",
      video: basePath + "/video/magagame.mp4",
      url: "https://github.com/xkintaro/php-mysql-website",
      demo: "",
      description: "bu projeyi 12.sınıf arkadaşım için yapmıştım.",
      date: "10 Eylül 2025",
      tags: ["PHP", "MySql"]
    },
    {
      title: "Aynı ağa bağlı cihazlar için dosya paylaşımı",
      image: basePath + "/thumb/wifi.webp",
      video: basePath + "/video/wifi-share.mp4",
      url: "https://github.com/xkintaro/wifi-file-transfer",
      demo: "",
      description: "Aynı ağa bağlı cihazlar için dosya paylaşımı",
      date: "10 Eylül 2025",
      tags: ["React", "Node.js"]
    },
    {
      title: "Lisede yaptığım ASP.NET Film Sitesi",
      image: basePath + "/thumb/kwnet.webp",
      video: basePath + "/video/kwnet.mp4",
      url: "https://github.com/xkintaro/asp.net-mysql-website",
      demo: "",
      description: "Aynı ağa bağlı cihazlar için dosya paylaşımı",
      date: "10 Eylül 2025",
      tags: ["ASP.NET", "MySql"]
    },
    {
      title: "Çeşitli platformlardan video indirme aracı",
      image: basePath + "/thumb/downloader.webp",
      video: basePath + "/video/downloader.mp4",
      url: "https://github.com/xkintaro/video-downloader",
      demo: "",
      description: "Çeşitli platformlardan video indirme aracı",
      date: "10 Eylül 2025",
      tags: ["React", "Node.js"]
    },
    {
      title: "Memories",
      image: basePath + "/thumb/memories.webp",
      video: basePath + "/video/memories.mp4",
      url: "https://github.com/xkintaro/kintaro-ui-preview",
      demo: "https://xkintaro.github.io/kintaro-ui-preview/",
      description: "arkadaşlarımla olan anılarım için yapmıştım.",
      date: "10 Eylül 2025",
      tags: ["React"]
    },
    {
      title: "React Bileşen Kütüphanem",
      image: basePath + "/thumb/ui.webp",
      video: basePath + "/video/ui-preview.mp4",
      url: "https://github.com/xkintaro/kintaro-ui-preview",
      demo: "https://xkintaro.github.io/kintaro-ui-preview/",
      description: "Daha sonraki projelerimde kullanmak için yazmış olduğum button, textbox, modal gibi kendisini tekrarlayan bileşenler.",
      date: "10 Eylül 2025",
      tags: ["React", "CSS"]
    },
  ];


  const skillsData = [
    {
      image: basePath + "/skills/HTML5.png",
      title: "HTML",
      description: "Web sayfalarının iskeletini oluşturan temel işaretleme dilidir."
    },
    {
      image: basePath + "/skills/CSS3.png",
      title: "CSS",
      description: "Web sitelerine stil, renk ve düzen kazandıran biçimlendirme dilidir."
    },
    {
      image: basePath + "/skills/JavaScript.png",
      title: "JavaScript",
      description: "Etkileşimli ve dinamik web arayüzleri geliştirmek için kullanılır."
    },
    {
      image: basePath + "/skills/CSharp.png",
      title: "C#",
      description: "Modern masaüstü, web ve oyun uygulamaları geliştirmek için güçlü bir dildir."
    },
    {
      image: basePath + "/skills/Vite.js.png",
      title: "React Vite",
      description: "Hızlı geliştirme ortamı sunan modern bir React yapılandırma aracıdır."
    },
    {
      image: basePath + "/skills/Node.js.png",
      title: "Node.js",
      description: "JavaScript'i sunucu tarafında çalıştırmaya olanak tanıyan güçlü bir çalışma ortamıdır."
    },
    {
      image: basePath + "/skills/Discord.js.png",
      title: "Discord.js",
      description: "Discord botları geliştirmek için kullanılan popüler ve güçlü bir Node.js kütüphanesidir."
    },
    {
      image: basePath + "/skills/Tailwind CSS.png",
      title: "Tailwind CSS",
      description: "Kullanışlı sınıflar ile hızlı ve esnek arayüz tasarımı yapmayı sağlar."
    },
    {
      image: basePath + "/skills/Python.png",
      title: "Python",
      description: "Basit sözdizimi ve geniş kütüphane desteğiyle hızlı prototipleme ve backend geliştirme için ideal bir dildir."
    },
    {
      image: basePath + "/skills/PHP.png",
      title: "PHP",
      description: "Dinamik web siteleri ve backend sistemleri için kullanılan popüler bir dildir."
    },
    {
      image: basePath + "/skills/NET.png",
      title: "ASP.NET",
      description: "C# tabanlı güçlü bir web uygulama geliştirme platformudur."
    },
    {
      image: basePath + "/skills/MySQL.png",
      title: "MySQL",
      description: "Veri depolamak ve yönetmek için kullanılan açık kaynaklı bir ilişkisel veritabanıdır."
    },
    {
      image: basePath + "/skills/MongoDB.png",
      title: "MongoDB",
      description: "Esnek ve ölçeklenebilir NoSQL veritabanı sistemidir."
    }
  ];

  return (
    <>
      <div className="hidden">
        <Theme />
      </div>
      <Modal
        name={"theme"}
        title={"Select Theme"}
      >
        <div className='w-full p-4'>
          <Theme />
        </div>
      </Modal>

      <div className="min-h-screen bg-[var(--bg-1)]">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='w-full flex justify-center items-center fixed top-4 left-auto z-[var(--navbar-z)]'
        >
          <div className='border border-solid border-[var(--border)] bg-[var(--bg-3)]/50 backdrop-blur-xs py-4 px-5 rounded-full max-w-3xl w-fit flex gap-2.5 items-center'>

            {shouldShowMore ? (
              <>
                {menuItems.slice(0, visibleItemsCount - 1)}

                <div className="relative flex-1 justify-end flex" ref={dropdownRef}>
                  <Button3 onClick={() => setIsDropdownOpen(prev => !prev)}>
                    <MoreVertical />
                  </Button3>
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-[var(--bg-3)] border border-solid border-[var(--border)] rounded-[30px] shadow-lg z-10 p-2 flex flex-col gap-1">
                      {menuItems.slice(visibleItemsCount - 1).map((menuItem) =>
                        React.cloneElement(menuItem)
                      )}
                    </div>
                  )}
                </div>
              </>
            ) : (
              menuItems
            )}
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="relative w-full overflow-hidden bg-[var(--bg-1)] -mt-[var(--navbar-h)] pt-[var(--navbar-h)]">
          {/* Background gradient */}
          <div className="absolute inset-0 z-0">

            {/* degrade */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-1)]/80 via-[var(--bg-1)] to-[var(--bg-1)]/80 opacity-95"></div>

            {/* radial */}
            <div className="absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-2)] blur-3xl"></div>

          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>

          <div className="relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-5xl pt-20">

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-4xl text-balance sm:text-5xl md:text-6xl lg:text-7xl text-[var(--text-1)] "
              >
                👋 Merhaba, Ben Mustafa. Kod yazmayı, öğrenmeyi ve üretmeyi seven bir geliştiriciyim.
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto mt-6 max-w-2xl text-center text-lg bg-gradient-to-tl from-[var(--text-1)]/50 via-[var(--text-1)]/90 to-[var(--text-1)]/50 bg-clip-text text-transparent"
              >
                Basit fikirleri güzel projelere dönüştürmeyi seviyorum. Web, backend ve frontend uygulamalarla ilgileniyorum. Burada hem yaptıklarımı hem de öğrendiklerimi paylaşıyorum.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button2
                  className="group relative h-12 px-6 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
                  onClick={() => scrollToSection(projectsRef)}
                >
                  <span className="relative z-10 flex items-center">
                    Gezinmeye Başla
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button2>


                <Button2 className="flex items-center h-12 px-6 bg-[var(--bg-1)]">
                  <Github className="h-4 w-4" />
                  View GitHub
                </Button2>

              </motion.div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section ref={aboutRef} className="py-24 bg-[var(--bg-2)] bg-[radial-gradient(#8882_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-96"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] rounded-2xl blur-lg opacity-20"></div>
                  <img
                    src={AboutImage}
                    alt="Mustafa"
                    className="relative w-full max-w-md mx-auto rounded-xl shadow-2xl border border-[var(--border)]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-bold text-[var(--text-1)] mb-4">Hakkımda</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] rounded-full"></div>
                </div>

                <p className="text-lg text-[var(--text-2)] leading-relaxed">
                  Ben Mustafa, bilgisayar ve yazılım dünyasına küçük yaşlardan beri büyük bir ilgim var.
                  Özellikle son 4 yıldır kendi başıma web siteleri ve uygulamalar geliştirerek bu alanda
                  kendimi sürekli geliştirdim. Henüz kariyerimin başındayım ama teknik olarak sağlam bir
                  altyapıya sahibim.
                </p>

                <p className="text-lg text-[var(--text-2)] leading-relaxed">
                  Ayrıca fotoğraf ve video düzenleme gibi görsel konularla da ilgileniyor ve bu alanda
                  üretim yapmayı seviyorum.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-20 bg-[var(--bg-1)] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-[var(--accent)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-2)]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[var(--text-1)] mb-4">Teknolojiler</h2>
              <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
                Geliştirme süreçlerimde kullandığım modern teknolojiler ve araçlar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-[var(--bg-3)] border border-[var(--border)] rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--bg-4)] rounded-xl group-hover:bg-[var(--accent)]/10 transition-colors duration-300">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-[var(--text-1)] mb-2">{skill.title}</h3>
                    <div className="absolute inset-0 bg-[var(--bg-3)] w-full h-full border  p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300  z-10">
                      <p className="text-sm text-[var(--text-2)]">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="py-20 bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-[var(--text-1)] mb-4">Projelerim</h2>
              <p className="text-lg text-[var(--text-2)] max-w-2xl mx-auto">
                Geliştirdiğim bazı projeler ve çalışmalarım
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => handleOpenModal(project)}
                  className="group bg-[var(--bg-3)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-3)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-[var(--bg-4)]/80 text-[var(--text-2)] text-xs rounded-full border border-[var(--border)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-[var(--text-1)] mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-sm text-[var(--text-2)] mb-4">{project.date}</p>
                    <div className="flex items-center gap-2 text-[var(--accent)] text-sm font-medium">
                      Detayları Gör
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <Modal
          name="project"
          title={selectedProject?.title || "Proje Detayları"}
          width="max-w-4xl"
        >
          {selectedProject && (
            <div className='w-full p-6 space-y-6'>
              {selectedProject.video ? (
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-[var(--bg-3)] border border-[var(--border)]">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster={selectedProject.image}
                  >
                    <source src={selectedProject.video} type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                </div>
              ) : (
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-[var(--bg-3)] border border-[var(--border)]">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>
              )}

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[var(--text-2)] text-sm font-medium">
                    {selectedProject.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[var(--bg-4)] text-[var(--text-2)] text-sm rounded-full border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.description && (
                  <p className="text-[var(--text-2)] leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}

                <div className="flex gap-3 pt-4">
                  {selectedProject.demo && (
                    <Button1
                      onClick={() => window.open(selectedProject.demo, "_blank")}
                      className="flex-1 h-12 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      Demo'yu Gör
                    </Button1>
                  )}
                  {selectedProject.url && (
                    <Button1
                      onClick={() => window.open(selectedProject.url, "_blank")}
                      className="flex-1 h-12 bg-[var(--bg-3)] border-[var(--border)] text-[var(--text-1)] rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      Kaynak Kodları
                    </Button1>
                  )}
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}

export default App;