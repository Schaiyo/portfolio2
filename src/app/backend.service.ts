import { Injectable } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillComponent } from './skill/skill.component';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  getSkill(): String[] {
    return [
      'Windows',
      'linux',
      'Asterisk (VoIP)',
      'MS Office',
      'Photoshop',
      'HTML',
      'CSS',
      'PHP',
      'MySQL'
    ];
  }

  getContact() {
    return [
      {
        title: 'ที่อยู่ : ',
        detail: 'บางใหญ่ นนทบุรี'
      },
      {
        title: 'มือถือ : ',
        detail: '086-896-6386'
      },
      {
        title: 'E-Mail : ',
        detail: 'sasangchai@gmail.com'
      }
    ];
  }

  getPortfolio() {
    return [
      {
        topic: 'Multi Infinity Plus Co.Ltd. : 2560 - ปัจจุบัน',
        info: 'Senior Engineer : ผู้แลระบบคอมพิวเตอร์และจัดเตรียม environment ร่วมกับทีมพัฒนาแอพพลิเคชั่น, ติดต่อประสานงานลูกค้าร่วมกับเซลล์, งานเอกสารประเภท Compare TOR เปรียบเทียบราคา Scorp Of Work'
      },
      {
        topic: 'VRM Voiz Plus Co.Ltd. : 2547 - 2557',
        info: 'Engineer : ดูแลระบบแม่ข่ายคอมพิวเตอร์, ศึกษาและพัฒนาระบบ VoIP ได้แก่ Asterisk FreePBX Issabel ใช้งานร่วมกับระบบ Call center, ดูแลและแก้ไขปัญหาให้ลูกค้า รวมถึงนำเสนอ Solution ที่ดีกว่าให้กับลูกค้าเพื่อการใช้งานได้อย่างเหมาะสม'
      },
      {
        topic: 'ปริญญาตรี : ',
        info: 'สาขาคอมพิวเตอร์ธุรกิจ บริหารธุรกิจ มหาวิทยาลัยราชภัฎธนบุรี'
      },
      {
        topic: 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) : ',
        info: 'สาขาคอมพิวเตอร์ธุรกิจ บริหารธุรกิจ โรงเรียนเทคนิควิมลบริหารธุรกิจ'
      },
      {
        topic: 'มัธยมศึกษาตอนปลาย : ',
        info: 'ศิลป์ภาษาเยอรมัน โรงเรียนมัธยมวัดมกุฎกษัตริย์'
      }
    ];
  }

  constructor() { }

}
