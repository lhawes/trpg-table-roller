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
import { SubLayout } from '../shared/SubLayout';
import { TableListLayout } from './TableListLayout';
import { TextTemplateLayout } from './TextTemplateLayout'

const GeneratorNameLayout = css({
  gridColumn: 1,
  gridRow: 1,
});
const TableListSectionLayout = css({
  gridColumn: 1,
  gridRow: 2,
});
const TextTemplateLayoutStyles = css({
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRow: 1,
});
const RollOnTableButtonLayout = css({
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRow: 2,
});
const HistoryListLayout = css({
  gridColumnStart: 1,
  gridColumnEnd: 4,
  gridRow: 3,
});
const ExportDataButtonLayout = css({
  gridColumn: 1,
  gridRow: 4,
});
const FileUploadInputLayout = css({
  gridColumn: 2,
  gridRow: 4,
});
const ClearHistoryLayout = css({
  gridColumn: 3,
  gridRow: 4,
});

const pageLayout = css({
  gridTemplateColumns: `1fr 1fr`,
  gridTemplateRows: 'auto',
  columnGap: '12px'
})

const tableGridLayout = css({
  gridTemplateColumns: `1fr`,
  gridTemplateRows: 'auto',
});

const resultGridLayout = css({
  gridTemplateColumns: `1fr 1fr 1fr `,
  gridTemplateRows: '100px auto 1fr auto',
})

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
      <Section layout={pageLayout}>
        <SubLayout layout={tableGridLayout}>
        <div css={GeneratorNameLayout}><GeneratorName style={generatorNameStyles}/></div>
        <div css={TableListSectionLayout}><TableListLayout /></div>
        </SubLayout>
        <SubLayout layout={resultGridLayout}>
        <div css={TextTemplateLayoutStyles}><TextTemplateLayout /></div>
        <div css={RollOnTableButtonLayout}><RollOnTableButton /></div>
        <div css={HistoryListLayout}><HistoryList /></div>
        <div css={ExportDataButtonLayout}><ExportDataButton /></div>
        <div css={FileUploadInputLayout}><FileUploadInput /></div>
        <div css={ClearHistoryLayout}><ClearHistory /></div>
        </SubLayout>
      </Section>
    </BodyContainer>
  );
}
