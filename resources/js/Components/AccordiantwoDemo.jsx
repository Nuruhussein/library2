import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from './ui/accordiontwo';

function AccordiantwoDemo() {
  return (
    <div id="about" className="text-right" style={{ direction: 'rtl' }}>
      <Accordion multiple>
        <AccordionItem value="item-1">
          <AccordionHeader className="text-right">من نحن؟</AccordionHeader>
          <AccordionPanel className="text-right pr-4">
            مرحبًا بكم في المكتبة التراث، منصة متخصصة في تقديم نظرة على الكتب الإسلامية من خلال تحليل مقدماتها وذكر آراء العلماء المعتبرين حولها. هدفنا هو مساعدة القارئ في اختيار الكتب التي تحظى بتقدير العلماء في مختلف مجالات العلوم الإسلامية.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader className="text-right">ماذا نقدم؟</AccordionHeader>
          <AccordionPanel className="text-right pr-4">
            <div className="space-y-2">
              <p>نعتمد في مراجعاتنا على:</p>
              <ul className="list-disc pr-6 space-y-2">
                <li>تحليل المقدمة: تقديم ملخص لأهداف الكتاب، ومنهجه، وأهم موضوعاته بناءً على ما ذكره المؤلف في المقدمة.</li>
                <li>آراء العلماء: نقل أقوال العلماء حول قيمة الكتاب، وموثوقيته، ومدى اعتماده في الدراسات الشرعية.</li>
                <li>تصنيف الكتب حسب المجال العلمي: بحيث تشمل:
                  <ul className="list-circle pr-6 pt-2 space-y-1">
                    <li>العقيدة</li>
                    <li>التفسير وعلوم القرآن</li>
                    <li>الحديث وعلومه</li>
                    <li>الفقه وأصوله</li>
                    <li>السيرة والتاريخ الإسلامي</li>
                    <li>العلوم الإسلامية العامة</li>
                  </ul>
                </li>
              </ul>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader className="text-right">لماذا نحن؟</AccordionHeader>
          <AccordionPanel className="text-right pr-4">
            <ul className="list-disc pr-6 space-y-2">
              <li>الاعتماد على النصوص الصحيحة – لا نعرض إلا الكتب الموافقة مع القرآن والسنة.</li>
              <li>توثيق من العلماء – نعتمد على أقوال العلماء المعتبرين في تقييم الكتب.</li>
              <li>وضوح وموضوعية – نقدم مراجعات دقيقة دون تعقيد أو تحيز.</li>
            </ul>
            <p className="pt-2">تركيزنا على مقدمات الكتب وآراء العلماء يضمن مراجعات دقيقة وموثوقة تساعد كل باحث عن المعرفة الإسلامية الأصيلة.</p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordiantwoDemo;