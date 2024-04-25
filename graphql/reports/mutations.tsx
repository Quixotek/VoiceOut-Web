import { gql } from "@apollo/client";

export const CREATE_REPORT = gql`
  mutation CreateReport($createReportInput: ReportCreateInput!) {
    createReport(createReportInput: $createReportInput) {
      attachments
      createdAt
      description
      id
      isReviewed
      locations
      type
    }
  }
`;
