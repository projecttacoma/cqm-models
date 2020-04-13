module QDM
  # Find the right datatype model.
  class ModelFinder
    @hqmfOidToDatatypeMap = JSON.parse(File.read(File.join(File.dirname(__FILE__), 'hqmfOid_to_datatype_map.json')))

    def self.by_hqmf_oid(hqmfOid)
      datatype = @hqmfOidToDatatypeMap[hqmfOid]
      return nil if datatype.nil?

      return QDM.const_get(datatype)
    end
  end
end
