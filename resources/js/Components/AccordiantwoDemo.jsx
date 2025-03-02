import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from './ui/accordiontwo';

function AccordiantwoDemo() {
  return (
    <>
      <Accordion multiple>
        <AccordionItem value="item-1">
          <AccordionHeader>من نحن؟</AccordionHeader>
          <AccordionPanel>
            مرحبًا بكم في المكتبة التراث، منصة متخصصة في تقديم نظرة على الكتب الإسلامية من خلال تحليل مقدماتها وذكر آراء العلماء المعتبرين حولها. هدفنا هو مساعدة القارئ في اختيار الكتب التي تحظى بتقدير العلماء في مختلف مجالات العلوم الإسلامية.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionHeader>ماذا نقدم؟</AccordionHeader>
          <AccordionPanel>
            نعتمد في مراجعاتنا على: 
            <br />
            • تحليل المقدمة: تقديم ملخص لأهداف الكتاب، ومنهجه، وأهم موضوعاته بناءً على ما ذكره المؤلف في المقدمة. 
            <br />
            • آراء العلماء: نقل أقوال العلماء حول قيمة الكتاب، وموثوقيته، ومدى اعتماده في الدراسات الشرعية. 
            <br />
            • تصنيف الكتب حسب المجال العلمي: بحيث تشمل: 
            <br />
            • العقيدة 
            <br />
            • التفسير وعلوم القرآن 
            <br />
            • الحديث وعلومه 
            <br />
            • الفقه وأصوله 
            <br />
            • السيرة والتاريخ الإسلامي 
            <br />
            • العلوم الإسلامية العامة
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionHeader>لماذا نحن؟</AccordionHeader>
          <AccordionPanel>
            • الاعتماد على النصوص الصحيحة – لا نعرض إلا الكتب الموافقة مع القرآن والسنة. 
            <br />
            • توثيق من العلماء – نعتمد على أقوال العلماء المعتبرين في تقييم الكتب. 
            <br />
            • وضوح وموضوعية – نقدم مراجعات دقيقة دون تعقيد أو تحيز. 
            <br />
            تركيزنا على مقدمات الكتب وآراء العلماء يضمن مراجعات دقيقة وموثوقة تساعد كل باحث عن المعرفة الإسلامية الأصيلة.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default AccordiantwoDemo;