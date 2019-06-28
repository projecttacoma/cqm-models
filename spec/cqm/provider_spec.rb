require 'spec_helper'

RSpec.describe CQM::Provider do
  it 'can construct a provider' do
    expect do
      provider = CQM::Provider.new(
        givenNames: ['Joe'],
        familyName: 'Smith',
        specialty: '282N00000X',
        title: 'Dr.'
      )
      address = CQM::Address.new(
        street: ['Street'],
        city: 'City',
        state: 'state',
        zip: 'zip',
        country: 'country',
        use: 'use'
      )
      telecom = CQM::Telecom.new(
        preferred: true,
        value: 'value',
        use: 'use'
      )
      id = QDM::Identifier.new(namingSystem: CQM::Provider::NPI_OID, value: '111')
      provider.ids << id
      provider.addresses << address
      provider.telecoms << telecom
      provider.save!
    end.to_not raise_error
  end

  it 'test valid npi values' do
    expect(CQM::Provider.luhn_checksum('7992739871').to_i).to be 3
    expect(CQM::Provider.valid_npi?('1234567893')).to be true
    expect(CQM::Provider.valid_npi?('808401234567893')).to be true
    expect(CQM::Provider.valid_npi?('1')).to be false
    expect(CQM::Provider.valid_npi?('1010101010')).to be false
    expect(CQM::Provider.valid_npi?('abcdefghij')).to be false
  end

  it 'test npi assignment' do
    # A provider should only have a single NPI
    p = CQM::Provider.new
    p.npi = '1234567893'
    expect(p.ids.length).to be 1
    p.npi = '808401234567893'
    expect(p.ids.length).to be 1
    '808401234567893'.eql?(p.npi)
  end

  it 'test ccn assignment' do
    # A provider should only have a single CCN
    p = CQM::Provider.new
    p.ccn = '123456'
    expect(p.ids.length).to be 1
    p.ccn = '800890'
    expect(p.ids.length).to be 1
    '800890'.eql?(p.ccn)
    '2.16.840.1.113883.4.336'.eql?(p.ids.first.namingSystem)
  end

  it 'test tin assignment' do
    # A provider may have more than one TIN
    p = CQM::Provider.new
    p.tin = '538782414'
    expect(p.ids.length).to be 1
    p.tin = '123456789'
    expect(p.ids.length).to be 2
    '538782414'.eql?(p.tin)
    '2.16.840.1.113883.4.2'.eql?(p.ids.first.namingSystem)
  end
end
