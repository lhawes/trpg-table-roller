/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ClearHistory } from '../ClearHistory';
import { ExportDataButton } from '../ExportDataButton';
import { FileUploadInput } from '../FileUploadInput';
import { GeneratorName } from '../GeneratorName';
import { HistoryList } from '../HistoryList';
import { RollOnTableButton } from '../RollOnTableButton';
import { Section } from "../shared/Section";
import { TableList } from '../TableList';
import { TextTemplate } from '../TextTemplate';

const GeneratorNameLayout = css({
  gridColumn: 1,
  gridRow: 1,
});

const TextTemplateLayout = css({});
const TableListLayout = css({});
const RollOnTableButtonLayout = css({});
const ExportDataButtonLayout = css({});
const FileUploadInputLayout = css({});
const HistoryListLayout = css({});
const ClearHistoryLayout = css({});

const gridLayout = css({
  gridTemplateColumns: `1fr 1fr`,
  gridTemplateRows: '1fr',
});

export const BasePageLayout: React.FC = () => {
  return (
    <Section layout={gridLayout}>
      <div css={GeneratorNameLayout}><GeneratorName /></div>
      <div css={TextTemplateLayout}><TextTemplate /></div>
      <div css={TableListLayout}><TableList /></div>
      <div css={RollOnTableButtonLayout}><RollOnTableButton /></div>
      <div css={ExportDataButtonLayout}><ExportDataButton /></div>
      <div css={FileUploadInputLayout}><FileUploadInput /></div>
      <div css={HistoryListLayout}><HistoryList /></div>
      <div css={ClearHistoryLayout}><ClearHistory /></div>
    </Section>
  );
}
