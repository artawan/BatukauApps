import React, { Component } from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import OptionButton from "../../components/OptionButton/OptionButton";

// Import Gambar dari folder images
import * as BejiTaksu from "./images/BejiTaksu/";
import * as DalemKahyanganBatukaru from "./images/DalemKahyanganBatukaru/";
import * as GedongPenyimpananBusana from "./images/GedongPenyimpananBusana/";
import * as JabaSisi from "./images/JabaSisi/";
import * as JabaTengah from "./images/JabaTengah/";
import * as JeroanUtamaMandala from "./images/JeroanUtamaMandala/";
import * as JroBangbang from "./images/JroBangbang/";
import * as JroPenyaum from "./images/JroPenyaum/";
import * as JroSasah from "./images/JroSasah/";
import * as JroTaksu from "./images/JroTaksu/";
import * as Padmasana from "./images/Padmasana/";
import * as Pakisan from "./images/Pakisan/";
import * as PalinggihPangubengan from "./images/PalinggihPangubengan/";
import * as PalinggihPetangan from "./images/PalinggihPetangan/";
import * as PalinggihWanaKerti from "./images/PalinggihWanaKerti/";
import * as PelinggihBeji from "./images/PelinggihBeji/";
import * as PelinggihDanu from "./images/PelinggihDanu/";
import * as PewareganSuci from "./images/PewareganSuci/";
import DenahPura from "./images/denah-pura.jpg";

  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");

class DenahScreen extends Component {
  constructor(props){
    super(props);
  }

  state = {
    dimensions: {
      window,
      screen,
    },
  };

  onChange = ({ window, screen }) => {
    this.setState({ dimensions: { window, screen } });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.onChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onChange);
  }
  render() {    
    const { dimensions } = this.state;
    const pura = [
      {
        name: "Beji Taksu",
        image: BejiTaksu.PadmasariPalinggihBejiTaksu,
        keterangan: "Palinggih Beji Taksu bermakna sebagai tempat pembersihan sebelum nangkil ke pelinggih Jero Taksu",
        pelinggih:[{nama:'Padmasari : Palinggih Beji Taksu', images:BejiTaksu.PadmasariPalinggihBejiTaksu}],
      },
      {
        name: "Dalem Kahyangan Batukaru",
        image: DalemKahyanganBatukaru.DalemKahyanganBatukaru,
        keterangan: "Palinggih Dalem Kahyangan Batukaru merupakan pelinggih yang menuntukan Purusa Predana/Laki-laki dan Perempuan dalam kaitan pura.",
        pelinggih:[
          {nama:'Gedong Degeleg/Gedong Bata : palinggih Ida Bhatara Dalem Kahyangan', images:DalemKahyanganBatukaru.DalemKahyanganBatukaru},
          {nama: 'Padmasari : Palinggih Ida Bhatara Duirga', images:DalemKahyanganBatukaru.PadmasariPalinggihIdaBhataraDuirga},
          {nama:'Bale Saka 4 : Bale Pawedan ', images: DalemKahyanganBatukaru.BaleSaka4BalePawedan},
          {nama:'Bale Saka 6 : Bale Piasan/Pesanekan ', images: DalemKahyanganBatukaru.BaleSaka6BalePiasanPesanekan},
          {nama: 'Bale Saka 6 : Bale Gong ', images:DalemKahyanganBatukaru.BaleSaka6BaleGong},],
      },
      {
        name: "Gedong Penyimpanan Busana",
        image: GedongPenyimpananBusana.GedongPenyimpananBusana,
        keterangan: "Gedong Penyimpanan Busana digunakan sebagai tempat penyimpanan busana dan alat-alat yang diguanakan untuk upacara untuk dipasang pada setiap pura dan pelinggih.",
        pelinggih:[
          {nama:'Gedong Penyimpanan Busana', images:GedongPenyimpananBusana.GedongPenyimpananBusana},
        ],
      },
      {
        name: "Jaba Sisi",
        image: JabaSisi.DenahJabaSisi,
        keterangan: "Jaba Sisi / Kanistha Mandala adalah tempat pelaksanaan kegiatan-kegiatan wewalen seperti kegiatan Darma Wacana, acara Wayang, Acara Paruman/Rapat besar, Tarian, dll.",
        pelinggih:[
          {nama:'Gedong Alit : Palinggih Pangapit Lawang Tengen', images:JabaSisi.GedongAlitPalinggihPangapitLawangTengen},
          {nama:'Gedong Alit : Palinggih Pangapit Lawang Kiwa ', images:JabaSisi.GedongAlitPalinggihPangapitLawangKiwa},
          {nama:'Bale Batur Sari : Bale Kul-Kul', images:JabaSisi.BaleBaturSariBaleKulKul},
          {nama:'Wantilan Pasandekan', images:JabaSisi.WantilanPasandekan},
          {nama:'Gudang', images:JabaSisi.Gudang},
          {nama:'Pos Kesehatan', images:JabaSisi.PosKesehatan},
          {nama:'Pos Listrik', images:JabaSisi.PosListrik},
          {nama:'Dapur Staff', images:JabaSisi.DapurStaff},
          {nama:'Sekretariatan', images:JabaSisi.Sekretariatan},
        ],
      },
      {
        name: "Jaba Tengah",
        image: JabaTengah.DenahJabaTengah,
        keterangan: "Jaba Tengah adalah tempat pelaksanaan kegiatan-kegiatan wali dalam upacara yang terlaksana pada pura",
        pelinggih:[
          {nama:'[Palinggih Gaduh] Gedong Panggung : Palinggih Gaduh', images:JabaTengah.GedongPanggungPalinggihGaduh},
          {nama:'[Palinggih Gaduh] Bale Saka 4 : Bale Pesanakan', images:JabaTengah.BaleSaka4BalePesanakangaduh},
          {nama:'Lumbung Suci / Jineng : ( Penyimpenan Sarin Tahun )', images:JabaTengah.LumbungSuciJinengPenyimpenanSarinTahun},
          {nama:'[Palinggih Pengakan Pasek] Gedong : Palinggih Pengakan Pasek', images:JabaTengah.PalinggihPengakanPasek},
          {nama:'[Palinggih Pengakan Pasek] Bale Saka 4 : Bale Pesanakan', images:JabaTengah.BaleSaka4BalePesanakanPasek},
          {nama:'Bale Lantang Agung Saka 20 : Bale Agung', images:JabaTengah.BaleLantangAgungSaka20BaleAgung},
          {nama:'Bale saka 18 : Bale Pegat', images:JabaTengah.Balesaka18BalePegat},
          {nama:'Padma Tepasana : Palinggih Taru Nagasan', images:JabaTengah.PadmaTepasanaPalinggihTaruNagasan},
          {nama:'Gedong Tajuk :Genah Tirta Pasucian', images:JabaTengah.GedongTajukGenahTirtaPasucian},
          {nama:'Bale Saka 4 : Bale Marga', images:JabaTengah.BaleSaka4BaleMarga},
        ],
      },
      {
        name: "Jeroan Utama Mandala",
        image: JeroanUtamaMandala.DenahJeroanUtamaMandala,
        keterangan: "Jeroan / Utama Mandala adalah tempat beristananya Ida Bhatara Sang Hyang Tumuwuh atau Tuhan Dari Alam Semesta yang memberikan Kehidupan dari hutan dan isi dari alam semesta",
        pelinggih:[
          {nama:'Candi Prasasda Tumpang 7 Palinggih Penambahan Saka Luhur Penatahan Bali', images:JeroanUtamaMandala.CandiPrasasdaTumpang7PalinggihPenambahanSakaLuhurPenatahanBali},
          {nama:'Candi Alit Tumpang 3 Palinggih  Ratu De Kebayan', images:JeroanUtamaMandala.CandiAlitTumpang3PalinggihRatuDeKebayan},
          {nama:'Candi Alit Tumpang 3 Palinggih Ratu Layang Petak', images:JeroanUtamaMandala.CandiAlitTumpang3PalinggihRatuLayangPetak},
          {nama:'Padma Alit Palinggih Karihinan Kebayan Wangayagede', images:JeroanUtamaMandala.PadmaAlitPalinggihKarihinanKebayanWangayagede},
          {nama:'Padma Alit Palinggih Ratu Ida Bagus Panji', images:JeroanUtamaMandala.PadmaAlitPalinggihRatuIdaBagusPanji},
          {nama:'Padma Alit Palinggih Pangapit Lawang', images:JeroanUtamaMandala.PadmaAlitPalinggihPangapitLawang},
          {nama:'Padma Alit Palinggih Pangapit Kiwa', images:JeroanUtamaMandala.PadmaAlitPalinggihPangapitKiwa},
          {nama:'Meru Tumpang 7 : Palinggih Ratu De Made', images:JeroanUtamaMandala.MeruTumpang7PalinggihRatuDeMade},
          {nama:'Bale Aket Saka 4 : Palinggih Aket', images:JeroanUtamaMandala.BaleAketSaka4PalinggihAket},
          {nama:'Meru Tumpang 5 : Palinggih Ida Ratu Made Kobetan', images:JeroanUtamaMandala.MeruTumpang5PalinggihIdaRatuMadeKobetan},
          {nama:'Meru Tumpang 3 : Palinggih Ratu Mas', images:JeroanUtamaMandala.MeruTumpang3PalinggihRatuMas},
          {nama:'Gedong Tarib : Palinggih Penyawangan Pakendungan', images:JeroanUtamaMandala.GedongTaribPalinggihPenyawanganPakendungan},
          {nama:'Gedong Paibon : Palinggih Karihinan Cokorda Tabanan', images:JeroanUtamaMandala.GedongPaibonPalinggihKarihinanCokordaBadung},
          {nama:'Gedong Paibon : Palinggih Karihinan Cokorda Badung', images:JeroanUtamaMandala.GedongPaibonPalinggihKarihinanCokordaTabanan},
          {nama:'Bale Saka 4 : Palapah Asep', images:JeroanUtamaMandala.BaleSaka4PalapahAsep},
          {nama:'Gedong Rong Dua : Palinggih Manik Galih / Sri Sedana', images:JeroanUtamaMandala.GedongRongDuaPalinggihManikGalihSriSedana},
          {nama:'Bale Sakepat Tegeh : Panggungan', images:JeroanUtamaMandala.BaleSakepatTegehPanggungan},
          {nama:'Bale Sakenam : Bale Gong Due', images:JeroanUtamaMandala.BaleSakenamBaleGongDue},
          {nama:'Tepas (Bebaturan) : Linggih Kampuh', images:JeroanUtamaMandala.TepasBebaturanLinggihKampuh},
          {nama:'Gedong Dedeleh : Palinggih Arya Kasunaran', images:JeroanUtamaMandala.GedongDedelehPalinggihAryaKasunaran},
          {nama:'Gedong Tajuk : Palinggih Sang Hyang Surya', images:JeroanUtamaMandala.GedongTajukPalinggihSangHyangSurya},
          {nama:'Meru Tumpang 5 : Palinggih Ngejawa-Ngebali', images:JeroanUtamaMandala.MeruTumpang5PalinggihNgejawaNgebali},
          {nama:'Meru Tumpang 5 : Palinggih Ratu Mas Petak', images:JeroanUtamaMandala.MeruTumpang5PalinggihRatuMasPetak},
          {nama:'Meru Tumpang 3 : Palinggih Pacalang Agung', images:JeroanUtamaMandala.MeruTumpang3PalinggihPacalangAgung},
        ],
      },
      {
        name: "Jro Bangbang",
        image: JroBangbang.PadmasanaPalinggihIdaBhataraJroBangbang,
        keterangan: "Palinggih Jro Bangbang berfungsi sebagai tempat untuk membakar segala macam pembersihan pohon-pohon yang tumbuh disetiap pelinggih tidak boleh di buang atau dibakar ditempat lain",
        pelinggih:[
          {nama:'Padmasana : Palinggih Ida Bhatara Jro Bangbang', images:JroBangbang.PadmasanaPalinggihIdaBhataraJroBangbang},
          {nama:'Bale Saka 6 : Bale Pakemitan', images:JroBangbang.BaleSaka6BalePakemitan},
          {nama:'Bale : Bale Gong', images:JroBangbang.BaleBaleGong},
          {nama:'Bale : Bale Paon', images:JroBangbang.BaleBalePaon},
          {nama:'Bale : Bale Pasandekan', images:JroBangbang.BaleBalePasandekan},
        ],
      },
      {
        name: "Jro Penyaum",
        image: JroPenyaum.PelinggihJeroPenyauman,
        keterangan: "Palinggih Jro Penyaum ini adalah sebagai tempat penyiwian subak/sawah ritatkala bibit padi tumbuh/diberikan keselamatan untuk tumbuh.",
        pelinggih:[
          {nama:'Padmatiga : Palinggih Penyaum', images:JroPenyaum.PadmatigaPalinggihPenyaum},
          {nama:'Bale Saka 6 : Bale Gong', images:JroPenyaum.BaleSaka6BaleGong},
        ],
      },
      {
        name: "Jro Sasah",
        image: JroSasah.JeroSasah,
        keterangan: "Jero Sasah berfungsi untuk mensasahkan padi yang sudah di tandur/ panen",
        pelinggih:[
          {nama:'Bebaturan : Palinggih Sedana Degdeg', images:JroSasah.BebaturanPalinggihSedanaDegdeg},
          {nama:'Bebaturan : Palinggih Sri Sedana', images:JroSasah.BebaturanPalinggihSriSedana},
          {nama:'Bebaturan : Palinggih Ida Jro Wayan/Jro Sasah', images:JroSasah.BebaturanPalinggihIdaJroWayanJroSasah},
          {nama:'Bale Saka 6 : Bale Piasan', images:JroSasah.BaleSaka6BalePiasan},
          {nama:'Bale Saka 6 : Bale Pasandekan', images:JroSasah.BaleSaka6BalePasandekan},
          {nama:'Bale Saka 6 : Bale Gong', images:JroSasah.BaleSaka6BaleGong},
          {nama:'Bale Saka 4 : Bale Api', images:JroSasah.BaleSaka4BaleApi},
        ],
      },
      {
        name: "Jro Taksu",
        image: JroTaksu.JeroTaksu,
        keterangan: "Palinggih Jro Taksu bermakna sebagai tempat mendaftarkan atau registrasi anak yang baru pertama kali nangkil/menghadap Ida Sang Hyang Tumuwuh agar diberikan pencerahan dan keselamatan dalam hidup.",
        pelinggih:[
          {nama:'Padmasari : Palinggih Ida Bhatara Taksu ', images:JroTaksu.PadmasariPalinggihIdaBhataraTaksu},
          {nama:'Bale Saka 4 : Bale Pawedan ', images:JroTaksu.BaleSaka4BalePawedan},
          {nama:'Bale Saka 6 : Bale Pasandekan', images:JroTaksu.BaleSaka6BalePasandekan},
        ],
      },
      {
        name: "Pengapit Lawang",
        image: Padmasana.PadmasariPalinggihPangapitLawangKiwa,
        keterangan: "Pelinggih Apit Lawang bermakna sebagai pembatas atau penjaga batas pintu hutan yang tidak boleh diganggu oleh orang yang ingin berniat jahat terhadap hutan.",
        pelinggih:[
          {nama:'Padmasari : Palinggih Pangapit Lawang Tengen ', images:Padmasana.PadmasariPalinggihPangapitLawangTengen},
          {nama:'Padmasari : Palinggih Pangapit Lawang Kiwa', images:Padmasana.PadmasariPalinggihPangapitLawangKiwa},
        ],
      },
      {
        name: "Pakiisan",
        image: Pakisan.PadmasariPalinggihPakiisan,
        keterangan: "Palinggih Pakiisan berfungsi untuk mepekelem di aliran sungai / memberikan sesajen pada aliran sungai ",
        pelinggih:[
          {nama:'Padmasari : Palinggih Pakiisan', images:Pakisan.PadmasariPalinggihPakiisan},
          {nama:'Bale Saka 6 : Bale Piasan/Pasandekan', images:Pakisan.BaleSaka6BalePiasanPasandekan},
        ],
      },
      {
        name: "Palinggih Pangubengan",
        image: PalinggihPangubengan.PadmasanaDanPadmaPangapitPalinggihPangubengan,
        keterangan: "Pelinggih Pangubengan berfungsi sebagai tempat untuk memohon keselamatan terhadap padi baru berumur 3 bulan agar padi merata keluar buah.",
        pelinggih:[
          {nama:'Padmasana Dan Padma Pangapit : Palinggih Pangubengan ', images:PalinggihPangubengan.PadmasanaDanPadmaPangapitPalinggihPangubengan},
          {nama:'Bale Saka 4 : Bale Pawedan', images:PalinggihPangubengan.BaleSaka4BalePawedan},
          {nama:'Bale Saka 6 : Bale Piasan', images:PalinggihPangubengan.BaleSaka6BalePiasan},
          {nama:'Bale Saka 4 : Bale Api/Bale Pasandekan', images:PalinggihPangubengan.BaleSaka4BaleApiBalePasandekan},
        ],
      },
      {
        name: "Palinggih Petangan",
        image: PalinggihPetangan.PuraPetangan,
        keterangan: "Palinggih Petangan berfungsi sebagai tempat untuk berterima kasih pada saat padi sudah menguning/panen atau bisa di bilang taang-taang/sudah siap panen",
        pelinggih:[
          {nama:'Padmasari : Palinggih Ida Ratu Sedahan Made Petangan', images:PalinggihPetangan.PadmasariPalinggihIdaRatuSedahanMadePetangan},
          {nama:'Padmasari : Palinggih Pangayatan Puncak Sari', images:PalinggihPetangan.PadmasariPalinggihPangayatanPuncakSari},
          {nama:'Padmasari : Palinggih Pangayatan Pucak Kedaton', images:PalinggihPetangan.PadmasariPalinggihPangayatanPucakKedaton},
          {nama:'Bale Saka 4 : Bale Gong', images:PalinggihPetangan.BaleSaka4BaleGong},
        ],
      },
      {
        name: "Palinggih WanaKerti",
        image: PalinggihWanaKerti.TuguBebaturanPalinggihWanaKerti,
        keterangan: "Pelinggih Wana Kerthi bermakna sebagai pemelihara ekosistem dari seluruh hutan dan seisi alam semesta ",
        pelinggih:[
          {nama:'Tugu Bebaturan : Palinggih Wana Kerthi', images:PalinggihWanaKerti.TuguBebaturanPalinggihWanaKerti},
        ],
      },
      {
        name: "Pelinggih Beji",
        image: PelinggihBeji.PalinggihBejiSarenKangin,
        keterangan: "Palinggih Beji Saren Kangin berfungsi untuk membersihkan diri sebelum akan nangkil/menghadap ke Jeroan / Utama Mandala untuk sembahyang kepada Ida Bhatara Sang Hyang Tumuwuh atau Tuhan dari Alam Semesta untuk meminta mohon Keselamatan dalam hidup",
        pelinggih:[
          {nama:'Padmasari : Palinggih Ida Ratu Taman Beji', images:PelinggihBeji.PadmasariPalinggihIdaRatuTamanBeji},
          {nama:'Padmasari : Palinggih Ida Bhatara Gangga', images:PelinggihBeji.PadmasariPalinggihIdaBhataraGangga},
          {nama:'Bale Saka 4 : Bale Pawedan', images:PelinggihBeji.BaleSaka4BalePawedan},
          {nama:'Bale Saka 6 : Bale Piasan', images:PelinggihBeji.BaleSaka6BalePiasan},
          {nama:'Telaga Arca : Beji Luhur', images:PelinggihBeji.TelagaArcaBejiLuhur},
          {nama:'Telaga Saring : Beji Sor', images:PelinggihBeji.TelagaSaringBejiSor},
        ],
      },
      {
        name: "Pelinggih Danu",
        image: PelinggihDanu.GedongPenyawanganDanauTamblingan,
        keterangan: "Palinggih Danu berfungsi sebagai penjaga miniatur danau tamblingan dan melambangkan kemakmuran terhadap sawah.",
        pelinggih:[
          {nama:'Gedong : Penyawangan Danau Tamblingan', images:PelinggihDanu.GedongPenyawanganDanauTamblingan},
        ],
      },
      {
        name: "Pewaregan Suci",
        image: PewareganSuci.DenahPwarenganSuci,
        keterangan: "Pewaregan Suci ini digunakan sebagai tempat dapur suci untuk memasak makanan untuk pada sulinggih, pengayah dan pemedek/orang nangkil untuk makan pada saat piodalan/upacara yang dilaksanakan.",
        pelinggih:[
          {nama:'Bale Saka 6 : Bale Paon', images:PewareganSuci.BaleSaka6BalePaon},
          {nama:'Bale Lantang Saka 16 : Bale Pesagi', images:PewareganSuci.BaleLantangSaka16BalePesagi},
          {nama:'Bale Saka 4 : Bale Api', images:PewareganSuci.BaleSaka4BaleApi},
        ],
      },
    ];

    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={DenahPura}
            style={
              (styles.denahImage, { height: dimensions.screen.height, width: dimensions.screen.width - 5 })
            }
          />
          <View style={styles.optionContainer}>
          {pura.map( (p) =>
            <OptionButton key={p.name} image={p.image} label={p.name} keterangan={p.keterangan} onPress={() => {
              this.props.navigation.navigate("Detail", {pelinggih: p.pelinggih});
              this.props.navigation.setParams({
                Title: p.name,
              })
            }} />
          )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  denahImage:{
    paddingBottom: 25,
  },
  optionContainer:{
    paddingTop: 10,
  },
});

export default DenahScreen;
