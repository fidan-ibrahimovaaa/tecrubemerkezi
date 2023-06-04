import {Image} from 'cloudinary-react'
import svg from './assets/punk.svg'





export const successData = [{
  id:1,
    icon: <img src={svg} alt="svg" />,
    details: 'Təcrübəçimiz Fərəh Bağırovanı öz şirkətimizdə "İnsan resursları üzrə mütəxəssis - HR" vəzifəsi üzrə işə qəbul etdik.Fərəh xanım ötən ay ofisimizdə təşkil etdiyimiz HR vəzifəsi üzrə təcrübə proqramını uğurla başa vurub.',
    image:  <Image style={{
        borderRadius: "50%",
        height: 64,
        width: 64
      }} cloudName='dkt4cajom' 
    publicId='https://res.cloudinary.com/dn2b3gtui/image/upload/c_scale,q_100,w_257/v1685102747/WhatsApp_Image_2023-05-26_at_15.43.31_qbhulk.jpg'/>,
    name: 'Fərəh Bağırova',
    workplace: 'İnsan resursları üzrə mütəxəssis',
},
{id:2,
  icon: <img src={svg} alt="svg" />,
  details: 'Təcrübəçimiz Nursel Balıyeva referansımızla "Unikal Texnik" MMC-də "mühasib köməkçisi" vəzifəsi üzrə işə qəbul olub.Nursel xanım təşkil etdiyimiz "mühasib" vəzifəsi üzrə təcrübə proqramını sonuncu ayda iştirak edirdi.',
  image:  <Image style={{
      borderRadius: "50%",
      height: 64,
      width: 64
    }} cloudName='dkt4cajom' 
  publicId='https://res.cloudinary.com/dn2b3gtui/image/upload/q_100/v1685103672/WhatsApp_Image_2023-05-26_at_16.20.45_qplkzg.jpg'/>,
  name: 'Nursel Balıyeva',
  workplace: 'mühasib köməkçisi',
},
{id:3,
  icon: <img src={svg} alt="svg" />,
  details: 'Təcrübəçimiz İlyas Nəsirov "Finance and Accounting" şirkətində "mühasib köməkçisi" vəzifəsi üzrə işə qəbul olub.İlyas bəy təşkil etdiyimiz "mühasib" vəzifəsi üzrə təcrübə proqramınds iştirak edirdi.',
  image:  <Image style={{
      borderRadius: "50%",
      height: 64,
      width: 64
    }} cloudName='dkt4cajom' 
  publicId='https://res.cloudinary.com/dn2b3gtui/image/upload/v1685103740/WhatsApp_Image_2023-05-26_at_16.20.46_psnebn.jpg'/>,
  name: 'İlyas Nəsirov',
  workplace: 'Mühasib köməkçisi',
},

{
  id:4,
  icon: <img src={svg} alt="svg" />,
  details: 'Təcrübəçimiz Rəhimə Seyidova referansımızla "City Leasing" MMC-də "menecer" vəzifəsi üzrə işə qəbul olub.Rəhimə xanım təşkil etdiyimiz "İnsan resursları üzrə menecer" vəzifəsi üzrə təcrübə proqramında iştirak edir.',
  image:  <Image style={{
      borderRadius: "50%",
      height: 64,
      width: 64
    }} cloudName='dkt4cajom' 
  publicId='https://res.cloudinary.com/dn2b3gtui/image/upload/q_100/v1685103589/WhatsApp_Image_2023-05-26_at_16.17.35_v6stsm.jpg'/>,
  name: 'Rəhimə Seyidova',
  workplace: 'Menecer',
},

{id:5,
  icon: <img src={svg} alt="svg" />,
  details: 'Təcrübəçimiz Mehdi Nəcəfovu öz şirkətimizdə "İnsan resursları üzrə mütəxəssis - HR" vəzifəsi üzrə işə qəbul etdik.Mehdi bəy ötən ay ofisimizdə təşkil etdiyimiz HR vəzifəsi üzrə təcrübə proqramını fərqlənmə diplomu ilə başa vurub.',
  image:  <Image style={{
      borderRadius: "50%",
      height: 64,
      width: 64
    }} cloudName='dkt4cajom' 
  publicId='https://res.cloudinary.com/dn2b3gtui/image/upload/v1685103779/WhatsApp_Image_2023-05-26_at_16.20.45_1_mmwreb.jpg'/>,
  name: 'Mehdi Nəcəfov',
  workplace: 'İnsan resursları üzrə mütəxəssis',
}
]