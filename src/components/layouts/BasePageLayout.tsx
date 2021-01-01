/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ClearHistory } from '../ClearHistory';
import { ExportDataButton } from '../ExportDataButton';
import { FileUploadInput } from '../FileUploadInput';
import { GeneratorName } from '../GeneratorName';
import { HistoryList } from '../HistoryList';
import { RollOnTableButton } from '../RollOnTableButton';
import { BodyContainer } from '../shared/BodyContainer';
import { Section } from '../shared/Section';
import { TableListLayout } from './TableListLayout';
import { TextTemplateLayout } from './TextTemplateLayout'

const GeneratorNameLayout = css({
  gridColumn: 1,
  gridRow: 1,
});
const TextTemplateLayoutStyles = css({
  gridColumnStart: 2,
  gridColumnEnd: 5,
  gridRow: 1,
});
const TableListSectionLayout = css({
  gridColumn: 1,
  gridRowStart: 2,
  gridRowEnd: 5,
});
const RollOnTableButtonLayout = css({
  gridColumnStart: 2,
  gridColumnEnd: 5,
  gridRow: 2,
});
const HistoryListLayout = css({
  gridColumnStart: 2,
  gridColumnEnd: 5,
  gridRow: 3,
});
const ExportDataButtonLayout = css({
  gridColumn: 2,
  gridRow: 4,
});
const FileUploadInputLayout = css({
  gridColumn: 3,
  gridRow: 4,
});
const ClearHistoryLayout = css({
  gridColumn: 4,
  gridRow: 4,
});

const gridLayout = css({
  gridTemplateColumns: `3fr 1fr 1fr 1fr `,
  // gridTemplateRows: `auto ${inputHeight} 1fr ${inputHeight}`,
  gridTemplateRows: 'auto',
  columnGap: '10px',
});

const generatorNameStyles = css({
  width: '100%',
  fontSize: '30px',
  padding: '0 0 5px 0',
  margin: '20px 0 16px 0',
  '&:hover,&:focus': {
    padding: '0 0 4px 0',
  }
})

export const BasePageLayout: React.FC = () => {
  return (
    <BodyContainer>
      <Section layout={gridLayout}>
        <div css={GeneratorNameLayout}><GeneratorName style={generatorNameStyles}/></div>
        <div css={TextTemplateLayoutStyles}><TextTemplateLayout /></div>
        <div css={TableListSectionLayout}><TableListLayout /></div>
        <div css={RollOnTableButtonLayout}><RollOnTableButton /></div>
        <div css={HistoryListLayout}><HistoryList /></div>
        <div css={ExportDataButtonLayout}><ExportDataButton /></div>
        <div css={FileUploadInputLayout}><FileUploadInput /></div>
        <div css={ClearHistoryLayout}><ClearHistory /></div>
      </Section>
    </BodyContainer>
  );
}
