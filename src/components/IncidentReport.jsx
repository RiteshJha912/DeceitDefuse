import React, { useState } from 'react'
import {
  FaUserShield,
  FaBuilding,
  FaGlobe,
  FaExclamationTriangle,
  FaPaperPlane,
  FaIdCard,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
  FaBriefcase,
  FaLandmark,
  FaFileAlt,
  FaShieldAlt,
} from 'react-icons/fa'
import { BsCheckCircleFill } from 'react-icons/bs'
import '../styles/IncidentReport.css'

const IncidentReport = () => {
  const [formData, setFormData] = useState({
    reporterType: '',
    // Common fields
    name: '',
    email: '',
    phone: '',
    incidentType: '',
    severity: '',
    description: '',
    date: '',
    location: '',
    evidence: null,
    additionalInfo: '',
    preferredContact: 'email',
    // Individual specific fields
    idNumber: '',
    // Corporate specific fields
    companyName: '',
    companySize: '',
    department: '',
    designation: '',
    // Government specific fields
    caseNumber: '',
    jurisdiction: '',
    officialCapacity: '',
    relatedCases: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const reporterTypes = [
    { value: 'individual', label: 'Individual', icon: <FaUserShield /> },
    { value: 'corporate', label: 'Corporate', icon: <FaBuilding /> },
    { value: 'government', label: 'Government', icon: <FaGlobe /> },
  ]

  const incidentTypes = [
    'Data Breach',
    'Ransomware Attack',
    'Phishing Attempt',
    'Malware Infection',
    'DDoS Attack',
    'Social Engineering',
    'Identity Theft',
    'Financial Fraud',
    'Other',
  ]

  const severityLevels = [
    { value: 'low', label: 'Low', color: '#2ecc71' },
    { value: 'medium', label: 'Medium', color: '#f1c40f' },
    { value: 'high', label: 'High', color: '#e74c3c' },
    { value: 'critical', label: 'Critical', color: '#c0392b' },
  ]

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees',
  ]

  if (submitted) {
    return (
      <div className='incident-report-container'>
        <div className='success-message'>
          <BsCheckCircleFill className='success-icon' />
          <h2>Report Submitted Successfully</h2>
          <p>
            Thank you for reporting the incident. Our security team will review
            your submission and contact you shortly.
          </p>
          <button
            className='submit-another-btn'
            onClick={() => setSubmitted(false)}
          >
            Submit Another Report
          </button>
        </div>
      </div>
    )
  }

  const renderIndividualFields = () => (
    <div className='form-section'>
      <h2>Personal Information</h2>
      <div className='form-grid'>
        <div className='form-group'>
          <label htmlFor='idNumber'>
            <FaIdCard /> ID Number
          </label>
          <input
            type='text'
            id='idNumber'
            name='idNumber'
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>
            <FaPhoneAlt /> Phone Number
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  )

  const renderCorporateFields = () => (
    <div className='form-section'>
      <h2>Corporate Information</h2>
      <div className='form-grid'>
        <div className='form-group'>
          <label htmlFor='companyName'>
            <FaBuilding /> Company Name
          </label>
          <input
            type='text'
            id='companyName'
            name='companyName'
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='companySize'>
            <FaUsers /> Company Size
          </label>
          <select
            id='companySize'
            name='companySize'
            value={formData.companySize}
            onChange={handleChange}
            required
          >
            <option value=''>Select Company Size</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='department'>
            <FaBriefcase /> Department
          </label>
          <input
            type='text'
            id='department'
            name='department'
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='designation'>
            <FaUserShield /> Designation
          </label>
          <input
            type='text'
            id='designation'
            name='designation'
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  )

  const renderGovernmentFields = () => (
    <div className='form-section'>
      <h2>Government Agency Information</h2>
      <div className='form-grid'>
        <div className='form-group'>
          <label htmlFor='department'>
            <FaLandmark /> Department/Agency
          </label>
          <input
            type='text'
            id='department'
            name='department'
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='designation'>
            <FaUserShield /> Official Designation
          </label>
          <input
            type='text'
            id='designation'
            name='designation'
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='caseNumber'>
            <FaFileAlt /> Case Number (if applicable)
          </label>
          <input
            type='text'
            id='caseNumber'
            name='caseNumber'
            value={formData.caseNumber}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='jurisdiction'>
            <FaGlobe /> Jurisdiction
          </label>
          <input
            type='text'
            id='jurisdiction'
            name='jurisdiction'
            value={formData.jurisdiction}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='officialCapacity'>
            <FaShieldAlt /> Official Capacity
          </label>
          <input
            type='text'
            id='officialCapacity'
            name='officialCapacity'
            value={formData.officialCapacity}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group full-width'>
          <label htmlFor='relatedCases'>Related Cases</label>
          <textarea
            id='relatedCases'
            name='relatedCases'
            value={formData.relatedCases}
            onChange={handleChange}
            rows='3'
            placeholder='Please list any related case numbers or ongoing investigations.'
          />
        </div>
      </div>
    </div>
  )

  return (
    <div className='incident-report-container'>
      <div className='report-header'>
        <FaExclamationTriangle className='header-icon' />
        <h1>Incident Report Form</h1>
        <p>Report cybersecurity incidents, threats, or suspicious activities</p>
      </div>

      <form onSubmit={handleSubmit} className='incident-form'>
        <div className='form-section'>
          <h2>Reporter Information</h2>
          <div className='reporter-type-selector'>
            {reporterTypes.map((type) => (
              <label key={type.value} className='reporter-type-card'>
                <input
                  type='radio'
                  name='reporterType'
                  value={type.value}
                  checked={formData.reporterType === type.value}
                  onChange={handleChange}
                  required
                />
                <div className='reporter-type-content'>
                  {type.icon}
                  <span>{type.label}</span>
                </div>
              </label>
            ))}
          </div>

          <div className='form-grid'>
            <div className='form-group'>
              <label htmlFor='name'>Full Name *</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email Address *</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {formData.reporterType === 'individual' && renderIndividualFields()}
        {formData.reporterType === 'corporate' && renderCorporateFields()}
        {formData.reporterType === 'government' && renderGovernmentFields()}

        <div className='form-section'>
          <h2>Incident Details</h2>
          <div className='form-grid'>
            <div className='form-group'>
              <label htmlFor='incidentType'>Type of Incident *</label>
              <select
                id='incidentType'
                name='incidentType'
                value={formData.incidentType}
                onChange={handleChange}
                required
              >
                <option value=''>Select Incident Type</option>
                {incidentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='severity'>Severity Level *</label>
              <div className='severity-selector'>
                {severityLevels.map((level) => (
                  <label key={level.value} className='severity-option'>
                    <input
                      type='radio'
                      name='severity'
                      value={level.value}
                      checked={formData.severity === level.value}
                      onChange={handleChange}
                      required
                    />
                    <span style={{ color: level.color }}>{level.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='date'>Date of Incident *</label>
              <input
                type='datetime-local'
                id='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='location'>
                <FaMapMarkerAlt /> Location/Region
              </label>
              <input
                type='text'
                id='location'
                name='location'
                value={formData.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='form-group full-width'>
            <label htmlFor='description'>Detailed Description *</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              required
              rows='5'
              placeholder='Please provide a detailed description of the incident, including any relevant technical details, impact, and immediate actions taken.'
            />
          </div>

          <div className='form-group full-width'>
            <label htmlFor='evidence'>Upload Evidence (Optional)</label>
            <div className='file-upload'>
              <input
                type='file'
                id='evidence'
                name='evidence'
                onChange={handleChange}
                accept='.pdf,.doc,.docx,.txt,.jpg,.jpeg,.png'
              />
              <label htmlFor='evidence' className='file-upload-label'>
                <FaPaperPlane /> Choose File
              </label>
            </div>
            <p className='file-upload-hint'>
              Accepted formats: PDF, DOC, DOCX, TXT, JPG, PNG (Max size: 10MB)
            </p>
          </div>

          <div className='form-group full-width'>
            <label htmlFor='additionalInfo'>Additional Information</label>
            <textarea
              id='additionalInfo'
              name='additionalInfo'
              value={formData.additionalInfo}
              onChange={handleChange}
              rows='3'
              placeholder='Any additional information that might be helpful for our security team.'
            />
          </div>
        </div>

        <div className='form-section'>
          <h2>Contact Preferences</h2>
          <div className='contact-preferences'>
            <label className='preference-option'>
              <input
                type='radio'
                name='preferredContact'
                value='email'
                checked={formData.preferredContact === 'email'}
                onChange={handleChange}
              />
              <span>Email</span>
            </label>
            <label className='preference-option'>
              <input
                type='radio'
                name='preferredContact'
                value='phone'
                checked={formData.preferredContact === 'phone'}
                onChange={handleChange}
              />
              <span>Phone</span>
            </label>
          </div>
        </div>

        <button type='submit' className='submit-btn'>
          <FaPaperPlane /> Submit Report
        </button>
      </form>
    </div>
  )
}

export default IncidentReport
