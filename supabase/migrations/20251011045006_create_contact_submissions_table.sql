/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting
      - `email` (text) - Email address
      - `phone` (text, optional) - Phone number
      - `company` (text, optional) - Company name
      - `service` (text) - Service interested in
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting new submissions (public access for form)
    - Add policy for authenticated users to read submissions (admin access)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
