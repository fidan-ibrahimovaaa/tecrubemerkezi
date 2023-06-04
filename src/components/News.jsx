import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import blog1 from '../images/blog1.jpeg';
import blog2 from '../images/blog2.jpeg';
import blog3 from '../images/blog3.jpeg';
const News = () => {


  return (
    <>
      <div className='blog-hero'>
        <div className="blog-hero__body">
          <h1 data-aos="fade-right">Danışır Təcrübə</h1>
        </div>
      </div>
      <section className="blogs">
        <h2 data-aos="fade-right">Bloqlar</h2>
        <div className="packages" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          <div className="package ">
            <div className="package-title">
              <img src={blog1} alt="" />
            </div>
            <div className="info-title">
              <p className='title'>
                Bu gün ofisimizdə Ulu Öndər Heydər Əliyevin 100 illik yubileyinə həsr etdiyimiz "Karyera planlaması" mövzusunda iş müsahibəsinə hazırlıq təlimi baş tutdu.

                Sonda təcrübəçilərimizə rəsmi iştirak Sertifikatı təqdim edildi.
              </p>
            </div>
            <div className="package-main">
              <div className="details">
                <i class="fa-solid fa-calendar-days"></i>
                <p className="detail">15/05/2022</p>
              </div>
            </div>
          </div>

          <div className="package">
            <div className="package-title">
              <img src={blog2} alt="" />
            </div>
            <div className="info-title">
              <p className='title'>
                8-10 iyun tarixlərində “Baku Crystal Hall”da “Heydər Əliyev və Azərbaycan sahibkarlığı” mövzusunda keçiriləcək yerli şirkətlərin tanıtım sərgisində biz də varıq!

                İqtisadiyyat Nazirliyinin dəstəyi, Kiçik və Orta Biznesin İnkişafı Agentliyi - KOBİA (KOBİA) və “Marsol Group”un birgə təşkilatçılığı ilə keçiriləcək sərgidə sənaye, kənd təsərrüfatı, qida, İKT, təhsil, inşaat, logistika, tekstil və digər sahələrdə fəaliyyət göstərən yerli şirkətlərin məhsul və xidmətləri nümayiş olunacaq.
              </p>
            </div>
            <div className="package-main">
              <div className="details">
                <i class="fa-solid fa-calendar-days"></i>
                <p className="detail">20/05/2022</p>
              </div>
            </div>
          </div>


          <div className="package">
            <div className="package-title">
              <img src={blog3} alt="" />
            </div>
            <div className="info-title">
              <p className='title'>
                Karyera və İşə Hazırlıq Mərkəzinin "Logitrans" şirkəti ilə birgə təşkil etdiyi "Logistika ixtisası üzrə inkişaf proqramı" uğurla başladı.

                "Logitrans" şirkətinin direktoru Fariz Əhmədova təşəkkür edir, təcrübəçilərimizə isə bol uğur və karyera yüksəlişi arzulayırıq
              </p>
            </div>
            <div className="package-main">
              <div className="details">
                <i class="fa-solid fa-calendar-days"></i>
                <p className="detail">02/05/2022</p>
              </div>
            </div>
          </div>



        </div>
        <div className="info-package">
          <Link to='/news'>Ətraflı</Link>
        </div>
      </section>


      <div className="faq-client">
        <h2 data-aos="zoom-in">Sual-Cavab</h2>
        <div className="faq-client_wrapper">

          <div className="faq_boxes_top">
            <div className="faq-client_box">
              <h4>Təcrübə proqramına necə qatıla bilərəm?</h4>
              <p>Seçdiyiniz sahə üzrə təcrübə proqramına qoşulmaq üçün,eyni zamanda ətraflı məlumat almaq üçün baş ofisimizə yaxınlaşa bilərsiniz və yaxud sosial hesablarımıza,telefon nömrələrimizlə əlaqə saxlaya bilərsiniz.</p>
            </div>

            <div className="faq-client_box">
              <h4>Təcrübə proqramının müddəti nə qədərdir?</h4>
              <p>Təşkil etdiyimiz təcrübə proqramları minimum 3 ay, həftə içi 3 və ya 5 gün, gün ərzində 3 və ya 4 saat olmaqla səhər və günorta növbələri üzrə, bir çox vəzifələr üzrə isə axşam növbəsi üçün 2 saat müddətinə həyata keçirilir.</p>
            </div>
          </div>

          <div className="faq_boxes_bottom">
            <div className="faq-client_box">
              <h4>Hər hansı bir müqavilə imzalayırıq?</h4>
              <p>Bəli, təcrübəçi ilə mərkəz arasında təcrübə proqramı haqqında bütün məlumatları,bu müddəti əks etdirən,təcrübəçinin və mərkəzin vəzifə və öhdəliklərini bildirən müqavilə imzalanır. </p>
            </div>

            <div className="faq-client_box">
              <h4>Əlavə sualınız var?</h4>
              <p> Siz "Karyera Və İşə Hazırlıq Mərkəzi"nin sizə necə kömək edə biləcəyini və daha bir çox məsələləri bizimlə əlaqə saxlayaraq müəyyən edə bilərsiniz. </p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default News