import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function TermConditions() {

  const { t, i18n } = useTranslation();
  let mobile = localStorage.getItem("Verifymob");
  let farmerlanguage = localStorage.getItem("farmerLanguage");

  const navigate = useNavigate();

  useEffect(() => {
    i18n.changeLanguage(farmerlanguage ? farmerlanguage : "en");
    if (!mobile) {
      alert(t("dialog_check_login"));
      navigate("/mobile");
      return;
    } else {
      i18n.changeLanguage(farmerlanguage ? farmerlanguage : "en");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header />
      <div className="main">
        <div className="container-fluid header full-screen-wrap">
          {/* <!-- <div className="row p-2">
            <div className="col-6 logoSection">
              <img src="assets/images/tata-logo.png" className="img-fluid companylogo" alt="" />

            </div>
            <div className="col-6 text-right">
              <img src="assets/images/logo.png" className="img-fluid right_logo" alt="">
            </div>
          </div> --> */}
        </div>

        <div className="container mt-5 mb-5">
          <div className="row container-content ">
            <div className="mainbg">
              <div className="col-md-12 textCenter">
                <h1>{t('term_conditions')}</h1>
              </div>
              <div className="col-md-12">
                <div >


                  <p>
                    {t('term_conditions1')}
                  </p>
                  <p>
                    {t('term_conditions2')}</p>

                  <h3>
                    1.	{t('term_conditions_agreement')}
                  </h3>

                  <ul>
                    <li>{t('agreement1')}</li>
                    <li>{t('agreement2')}</li>
                    <li>{t('agreement3')}</li>
                    <li>{t('agreement4')}</li>
                    <li>{t('agreement5')}</li>
                    <li>{t('agreement6')}</li>
                    <li>{t('agreement7')}</li>
                    <li>{t('agreement8')}</li>
                    <li>{t('agreement9')}</li>
                  </ul>


                  <h3>
                    2.	{t('how_to_participate')}
                  </h3>

                  <ul>
                    <li>{t('participate1')}</li>
                    <li>{t('participate2')}</li>
                    <li>{t('participate3')}</li>
                    <li>{t('participate4')}</li>
                    <li>{t('participate5')}</li>
                    <li>{t('participate6')}</li>
                    <li>{t('participate7')}</li>
                    <li>{t('participate8')}</li>
                    <li>{t('participate9')}</li>
                    <li>{t('participate10')}</li>
                    <li>{t('participate11')}</li>
                  </ul>

                  <h3>
                    3.	{t('term_conditions_intellectual')}
                  </h3>

                  <ul>
                    <li>{t('intellectual1')}</li>
                    <li>{t('intellectual2')}</li>

                  </ul>

                  <h3>
                    4.	{t('general_conditions')}
                  </h3>

                  <ul>
                    <li>{t('general_conditions1')}</li>
                    <li>{t('general_conditions2')}</li>
                    <li>{t('general_conditions3')}</li>
                    <li>{t('general_conditions4')}</li>
                    <li>{t('general_conditions5')}</li>
                    <li>{t('general_conditions6')}</li>
                    <li>{t('general_conditions7')}</li>
                    <li>{t('general_conditions8')}</li>
                    <li>{t('general_conditions9')}</li>
                    <li>{t('general_conditions10')}</li>
                    <li>{t('general_conditions11')}</li>
                    <li>{t('general_conditions12')}</li>
                    <li>{t('general_conditions13')}</li>
                    <li>{t('general_conditions14')}</li>
                    <li>{t('general_conditions15')}</li>
                    <li>{t('general_conditions16')}</li>
                    <li>{t('general_conditions17')}</li>
                    <li>{t('general_conditions18')}</li>
                  </ul>


                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
