module Jekyll
    module Algolia
      module Hooks
        def self.before_indexing_each(record, node, context)
          return record if node.nil?
          # Do not index feature rows
          return nil if node.matches?('.row1')
          return nil if node.matches?('.row2')
          return nil if node.matches?('.row3')
          return nil if node.matches?('.row4')
          return nil if node.matches?('.row5')
          # Do not index sidebar
          return nil if node.matches?('.sidebar')
          # Do not index author profile
          return nil if node.matches?('.author_profile')
          # Do not index page permalink
          return nil if node.matches?('.permalink')   
          # Do not index table of contents
          return nil if node.matches?('.toc')
          return nil if node.matches?('.toc_label')
          return nil if node.matches?('.toc_icon')
          # Do not index weird stuff
          return nil if node.matches?('.entries_layout')
          record
        end
      end
    end
  end